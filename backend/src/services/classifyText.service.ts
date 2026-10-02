import { openAi } from "../config/apenAi.js";
import { gemini } from "../config/gemini.js";

export const classifyText = async (text: string): Promise<string> => {
  const response = await gemini.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: `
Classify the following text into exactly ONE of these categories:

Complaint
Query
Feedback
Other

Return ONLY the category name and confidence.
Do not return an explanation.

Text:
${text}
`,
  });
  return response.text?.trim() || "others";
};

//  * * not worked because of low credit in OPENAI API balance

// export const classifyText = async (text: string): Promise<string> => {
//   const result = await openAi.responses.create({
//     model: "gpt-6-astra",
//     instructions: `
//     classifies input text into one of the categories like
//       Complaint, Query,
//       Feedback, or Other

//       Return only category and confidence
//       Do not return an explanation.
//       Do not return any additional text.
//       `,
//     input: text,
//   });
//   console.log(result);
//   return result;
// };
