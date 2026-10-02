import { classifyText } from "../services/classifyText.service.js";

export const classifyController = async (req: Request, res: Response) => {
  const { text } = req.body;

  if (!text || typeof text !== "string") {
    return res.status(400).json({
      success: false,
      message: "Text is required",
    });
  }

  try {
    const result = await classifyText(text);

    return res.status(200).json({
      message: "Text received ",
      text,
      classified_data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
