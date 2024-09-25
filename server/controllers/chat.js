import { catchAsyncError } from "../utils/catchAsyncError.js";
import { Mistral } from "@mistralai/mistralai";
import { User } from "../models/user.js";

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

export const chatBot = catchAsyncError(async (req, res, next) => {
  const question = req.body.question;
  const userData = await User.findOne();

  const modifiedQuestion = `Hello your are assistant for my portfolio, User asked questions about me you have to answer from below data in natural human language 
  
  ${userData}

  And the question is:   ${question}

  Always answer in point wise and 

  `;

  const chatResponse = await client.chat.complete({
    model: "mistral-large-latest",
    messages: [{ role: "user", content: modifiedQuestion }],
  });

  res.status(200).json({
    success: true,
    reply: chatResponse.choices[0].message,
  });
});
