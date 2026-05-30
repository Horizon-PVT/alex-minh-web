# AGENTS.md — Alex Minh AI Website

This file defines the working rules for AI coding agents building the **Alex Minh AI** website.

The agent must follow this file before making implementation decisions.

---

## 1. Mission

Build a polished, conversion-focused website for:

> **Alex Minh AI — Website, Chatbot AI & Automation bán hàng cho doanh nghiệp Thanh Hóa**

The website must help local business owners understand the service, trust the brand, view demos, and submit leads.

This is not a generic portfolio website. It is a sales asset.

---

## 2. Product goal

The website must achieve:

1. Clear brand positioning.
2. Strong trust and professionalism.
3. Clear explanation of Web + Chatbot AI + Automation.
4. Visible CTA to Zalo/call/form.
5. Demo chatbot experience.
6. Mobile-first user experience.
7. Clean technical foundation for future AI/CRM features.

---

## 3. Required pages

Implement these routes unless explicitly instructed otherwise:

```txt
/
 /dich-vu
 /demo-chatbot-ai
 /du-an-mau
 /bang-gia
 /lien-he
 /blog
```

If time is limited, make `/` complete first and create clean starter versions for the other routes.

---

## 4. Required homepage sections

The homepage must include:

1. Header with logo/name and CTA.
2. Hero section.
3. Problem section.
4. Solution section.
5. Service packages.
6. Industry demo cards.
7. Chatbot demo preview.
8. Process section.
9. Pricing preview.
10. FAQ.
11. Final CTA.
12. Footer.
13. Floating contact/Zalo button.

---

## 5. Brand content

Brand name:

> Alex Minh AI

Primary headline:

> Website & Chatbot AI cho doanh nghiệp Thanh Hóa

Primary positioning:

> Tư vấn khách 24/7, thu lead tự động, tăng chuyển đổi online bằng website chuyên nghiệp, chatbot AI và automation bán hàng.

Tagline:

> Website • Chatbot AI • Automation bán hàng

Use Vietnamese content by default.

---

## 6. Target audience

Prioritize these users:

- Business owners in Thanh Hóa.
- Local service businesses.
- Hotels, homestays, restaurants, tourism businesses.
- Real estate agents and rental businesses.
- Spa, clinic, dental, gym.
- Education centers.
- OCOP/local product owners.

They may not understand technical AI terms, so explain benefits simply.

---

## 7. UX principles

- Mobile-first.
- Clear above-the-fold value proposition.
- CTA visible within 5 seconds.
- No clutter.
- Use cards, sections, icons and short copy.
- Make business benefits obvious.
- Avoid excessive animation.
- Every page should guide users toward contact/demo.

---

## 8. Visual direction

Preferred style:

- Modern.
- Trustworthy.
- Premium but friendly.
- AI/technology feel without being cold.
- Clean typography.
- Large rounded cards.
- Soft shadows.
- Subtle gradients.
- Strong CTA buttons.

Do not create childish, overly flashy, or crypto-like visuals.

---

## 9. Technical preferences

Recommended stack:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui if already configured or easy to add.
- Lucide icons.
- Framer Motion only if useful and lightweight.

Do not over-engineer.

---

## 10. Component structure

Create reusable components where useful:

```txt
components/
  site-header.tsx
  site-footer.tsx
  hero-section.tsx
  problem-section.tsx
  solution-section.tsx
  services-section.tsx
  industry-demo-section.tsx
  pricing-section.tsx
  faq-section.tsx
  lead-form.tsx
  chatbot-demo-widget.tsx
  floating-contact.tsx
```

Data should be separated where practical:

```txt
lib/
  site-config.ts
  services.ts
  industries.ts
  pricing.ts
  chatbot-script.ts
```

---

## 11. Chatbot demo requirements

Implement a scripted chatbot demo widget.

MVP does not require real AI API.

Chatbot flow:

1. Bot greets the visitor.
2. Visitor selects industry.
3. Bot asks if they have a website.
4. Bot asks what they want chatbot to support.
5. Bot asks for name and phone/Zalo.
6. Bot confirms submission.

Industries:

- Khách sạn / Du lịch
- Bất động sản
- Spa / Nha khoa
- Giáo dục
- OCOP / Đặc sản
- Khác

Do not pretend the demo is a fully deployed AI system if it is scripted.

---

## 12. Lead form requirements

Lead form fields:

- Full name
- Phone/Zalo
- Business industry
- Need/service interest
- Budget range
- Message

For MVP, form can submit to a mocked handler or API route.

Requirements:

- Validate required fields.
- Show success message.
- Show error state if needed.
- Keep code ready for Supabase/Google Sheet integration later.

---

## 13. Pricing content

Use these packages:

### Web Uy Tín

Price:

> Từ 3–7 triệu

### Web + Chatbot AI

Price:

> Từ 8–18 triệu

### AI Sales System

Price:

> Từ 20–50 triệu

### Vận hành & tối ưu

Price:

> Từ 500k–5 triệu/tháng

Use “từ” pricing, not fixed final price.

---

## 14. Copywriting rules

Avoid exaggerated claims:

- Do not say “cam kết tăng doanh thu”.
- Do not say “chắc chắn ra đơn”.
- Do not say “AI thay thế hoàn toàn nhân viên”.
- Do not promise guaranteed revenue.

Use realistic value:

- Hỗ trợ phản hồi khách nhanh hơn.
- Giảm thời gian tư vấn lặp lại.
- Thu lead rõ ràng hơn.
- Tăng uy tín online.
- Hỗ trợ tăng chuyển đổi.

---

## 15. Security and privacy rules

Never hardcode real secrets.

Do not create `.env` with real credentials.

Do not expose API keys.

If adding integration placeholders, use:

```txt
NEXT_PUBLIC_...
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
```

Only as examples in `.env.example`.

Lead/customer data must be treated as private.

---

## 16. AI coding safety rules

Before changing many files, create a short plan.

Prefer small, reviewable changes.

Do not delete existing important files unless explicitly instructed.

Do not install new dependencies unless necessary.

If dependency installation is required, explain why.

After implementation, run:

```bash
npm run lint
npm run build
```

If the project uses a different package manager, inspect package.json first.

---

## 17. Quality bar

The result must be:

- Clean.
- Production-looking.
- Responsive.
- Maintainable.
- Easy to extend.
- Not a generic template.
- Written in Vietnamese for customer-facing copy.

---

## 18. Acceptance checklist

Before reporting complete, confirm:

- [ ] Homepage is complete.
- [ ] Required routes exist.
- [ ] Header/footer work.
- [ ] CTA buttons visible.
- [ ] Lead form works at MVP level.
- [ ] Chatbot demo works.
- [ ] Pricing shown clearly.
- [ ] Industry demos shown.
- [ ] Mobile layout checked.
- [ ] No TypeScript errors.
- [ ] Build passes.
- [ ] README or setup notes updated if needed.

---

## 19. First implementation task

Build the MVP homepage first.

Then add the required route pages using shared components and consistent content.

Focus on business conversion before fancy features.

Final output should include:

1. Files changed.
2. How to run.
3. What was implemented.
4. Tests/build result.
5. Known limitations.
6. Suggested next step.

