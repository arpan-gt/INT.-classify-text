import OpenAI from "openai";
import { env } from "./env.js";

export const openAi = new OpenAI({
  apiKey: env.openAi_api_key,
});
