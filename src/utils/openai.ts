import { OpenAI } from "../../node_modules/openai/src/client";

export const generateContent = async (title: string, description: string) => {
  const openAi = new OpenAI({ apiKey: import.meta.env.VITE_OPENAI_API_KEY });
  const response = await openAi.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `You are healpful assistant that generate content for a blog post`,
      },
      {
        role: "user",
        content: `Generate a content for the title ${title} and description ${description}`,
      },
    ],
  });
  return response.choices[0].message.content;
};
