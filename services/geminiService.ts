
import { GoogleGenAI, Type } from "@google/genai";
import { FortuneResult, DivinationType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getDivinationResponse = async (
  type: DivinationType,
  userInput: string,
  userInfo: { name: string; birthDate: string; location: string }
): Promise<FortuneResult> => {
  const systemInstruction = `
    你是一位精通东南亚多元文化（特别是新马泰地区）的中文命理大师，艺名“DREAMX”。
    你的语气应当优雅、神秘、前瞻且富有同情心。
    在分析时，结合中国传统命理、西方占星术以及东南亚当地的文化习俗（如农历、传统节日、当地职业风向等）。
    
    分析维度包括：
    1. 整体运势评分 (0-100)
    2. 核心关键词 (3个)
    3. 详细解读 (300字左右)
    4. 针对东南亚生活的具体建议。
  `;

  const prompt = `
    测算类型: ${type}
    姓名: ${userInfo.name}
    出生日期: ${userInfo.birthDate}
    所在地: ${userInfo.location}
    具体诉求: ${userInput}
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          summary: { type: Type.STRING },
          score: { type: Type.NUMBER },
          tags: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          detailedAnalysis: { type: Type.STRING }
        },
        required: ["title", "summary", "score", "tags", "detailedAnalysis"]
      }
    },
  });

  return JSON.parse(response.text) as FortuneResult;
};

export const generateCardImage = async (prompt: string): Promise<string | null> => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { text: `A mystical, ethereal divination card for "${prompt}". DREAMX branding style, SEA aesthetics, gold accents, purple and navy background, high fantasy art style, spiritual energy.` }
      ]
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
