import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const scanRoots = ["src"];
const allowedExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".mdx"]);
const ignoredDirectories = new Set([
  "node_modules",
  ".next",
  "out",
  "dist",
  "build",
  ".git"
]);

const invalidPatterns = [
  { label: "z-[5]0", regex: /(?<![\w-])z-\[5\]0(?![\w-])/g },
  { label: "z-[2]0", regex: /(?<![\w-])z-\[2\]0(?![\w-])/g },
  { label: "text-slate-350", regex: /(?<![\w-])text-slate-350(?![\w-])/g },
  { label: "border-slate-850", regex: /(?<![\w-])border-slate-850(?![\w-])/g },
  { label: "border-slate-805", regex: /(?<![\w-])border-slate-805(?![\w-])/g },
  { label: "py-1.8", regex: /(?<![\w-])py-1\.8(?![\w-])/g },
  { label: "-top-3px", regex: /(?<![\w-])-top-3px(?![\w-])/g },
  { label: "h-4.5", regex: /(?<![\w-])h-4\.5(?![\w-])/g },
  { label: "w-4.5", regex: /(?<![\w-])w-4\.5(?![\w-])/g },
  { label: "z-5", regex: /(?<![\w-])z-5(?![\w-])/g },
  { label: "z-2", regex: /(?<![\w-])z-2(?![\w-])/g }
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) continue;

    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath));
      continue;
    }

    if (entry.isFile() && allowedExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function findInvalidClasses(filePath, content) {
  const findings = [];
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    for (const pattern of invalidPatterns) {
      pattern.regex.lastIndex = 0;
      const matches = [...line.matchAll(pattern.regex)];
      for (let matchIndex = 0; matchIndex < matches.length; matchIndex += 1) {
        findings.push({
          filePath,
          lineNumber: index + 1,
          pattern: pattern.label,
          line: line.trim()
        });
      }
    }
  });

  return findings;
}

const allFindings = [];

for (const scanRoot of scanRoots) {
  const absoluteRoot = path.join(rootDir, scanRoot);
  const files = await collectFiles(absoluteRoot);

  for (const filePath of files) {
    const content = await readFile(filePath, "utf8");
    allFindings.push(...findInvalidClasses(filePath, content));
  }
}

if (allFindings.length > 0) {
  console.error("FAIL invalid Tailwind class guard found corrupted classes:");
  for (const finding of allFindings) {
    const relativePath = path.relative(rootDir, finding.filePath).replaceAll(path.sep, "/");
    console.error(`${relativePath}:${finding.lineNumber} ${finding.pattern}`);
    console.error(`  ${finding.line}`);
  }
  process.exit(1);
}

console.log("PASS invalid Tailwind class guard: no corrupted classes found in src/");
