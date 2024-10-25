import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import { prisma } from "../../prisma/client.js";
import { chatBotSchema } from "./chatBot.validator.js";
import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

export const chatWithBot = catchAsyncError(async (req, res, next) => {
  const { question } = req.body;

  await chatBotSchema.validate({ question });

  const portfolio = await prisma.user.findFirst({
    where: {
      email: process.env.ADMIN_EMAIL,
    },
    omit: {
      password: true,
    },
    include: {
      avatar: true,
      titles: true,
      socialLinks: true,
    },
  });

  const modifiedQuestion = `Hello your are assistant for my portfolio, User asked questions about me you have to answer from below data which are in object form. And Answer in professional manner like human being.
  
  ${JSON.stringify(portfolio)}

  And the question is:   ${question}`;

  const chatResponse = await client.chat.complete({
    model: "mistral-large-latest",
    messages: [{ role: "user", content: modifiedQuestion }],
  });

  res.status(200).json({
    success: true,
    reply: chatResponse.choices[0].message,
  });
});
