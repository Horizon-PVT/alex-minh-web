import { getMockResponse } from "./prompts";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
}

export async function generateChatResponse(
  messages: ChatMessage[],
  systemInstruction: string
): Promise<string> {
  const provider = process.env.AI_CHAT_PROVIDER || "gemini";
  const model = process.env.AI_CHAT_MODEL || "gemini-2.5-flash";
  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  const latestMessage = messages[messages.length - 1]?.text || "";

  // 1. Fallback to Mock if provider is mock or keys are missing
  if (provider === "mock" || (provider === "gemini" && !geminiKey) || (provider === "openai" && !openaiKey)) {
    return getMockResponse(latestMessage);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 seconds timeout

  try {
    if (provider === "gemini" && geminiKey) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`;
      
      // Format history messages for Gemini API
      // Roles must alternate user -> model -> user -> model.
      // Gemini expects role: "user" | "model"
      const contents = messages.map((msg) => ({
        role: msg.sender === "bot" ? "model" : "user",
        parts: [{ text: msg.text }]
      }));

      const payload: any = {
        contents: contents,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 800
        }
      };

      if (model.includes("gemini-2.5")) {
        payload.generationConfig.thinkingConfig = {
          thinkingBudget: 0
        };
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API Error (HTTP ${response.status}): ${errorText}`);
      }

      const data = await response.json();
      const candidate = data.candidates?.[0];
      const reply = candidate?.content?.parts?.[0]?.text;
      
      // Log warning if generation did not stop normally (e.g. truncated due to length)
      const finishReason = candidate?.finishReason;
      if (finishReason && finishReason !== "STOP") {
        console.warn(`[Gemini Warning] Chat response finished with abnormal reason: ${finishReason}`);
      }

      if (!reply) {
        throw new Error("Gemini returned empty candidate content.");
      }

      return reply;

    } else if (provider === "openai" && openaiKey) {
      const url = "https://api.openai.com/v1/chat/completions";
      
      const openAiMessages = [
        { role: "system", content: systemInstruction },
        ...messages.map((msg) => ({
          role: msg.sender === "bot" ? "assistant" : "user",
          content: msg.text
        }))
      ];

      const payload = {
        model: model === "gemini-2.5-flash" ? "gpt-4o-mini" : model, // Fallback if user uses default model name for OpenAI
        messages: openAiMessages,
        temperature: 0.3,
        max_tokens: 800
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${openaiKey}`
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI API Error (HTTP ${response.status}): ${errorText}`);
      }

      const data = await response.json();
      const choice = data.choices?.[0];
      const reply = choice?.message?.content;

      // Log warning if generation did not stop normally (e.g. truncated due to length)
      const finishReason = choice?.finish_reason;
      if (finishReason && finishReason !== "stop") {
        console.warn(`[OpenAI Warning] Chat response finished with abnormal reason: ${finishReason}`);
      }

      if (!reply) {
        throw new Error("OpenAI returned empty choice content.");
      }

      return reply;
    }

    return getMockResponse(latestMessage);

  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Provider API Error:", error);
    }
    // Timeout or network error fallback response
    return "Dạ hiện tại bộ nhớ trợ lý AI đang quá tải phản hồi. Anh/chị vui lòng để lại số điện thoại/Zalo, em sẽ báo các bạn chuyên viên gọi điện tư vấn trực tiếp cho mình ngay nhé ạ!";
  } finally {
    clearTimeout(timeoutId);
  }
}
