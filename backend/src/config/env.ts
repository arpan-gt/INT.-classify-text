import dotenv from "dotenv";
dotenv.config();

function verifyEnv(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Env " ${key} " not defined`);
  }
  return value;
}

export const env = {
  port: verifyEnv("PORT") || 8080,
  openAi_api_key: verifyEnv("OPENAI_API_KEY"),
  gemini_api_key: verifyEnv("GEMINI_API_KEY"),
};
