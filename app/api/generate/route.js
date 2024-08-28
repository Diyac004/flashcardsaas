
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
   
    systemInstruction: "Generate a set of flashcards to help with studying and memorizing key concepts. Each flashcard should have a question, term, or prompt on one side, and the corresponding answer, definition, or explanation on the other side. The content should be concise, clear, and focused on the essential points. Ensure the flashcards are well-organized and categorized if necessary. The questions or prompts should challenge the user to recall important information. Provide examples where relevant.\nReturn in the following jason format:{\n\"flashvards:[{\n   \"front\": str,\n\"back\": str\n\n}]\n}\n\n}",
    safetySettings,
});
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
   safetySettings,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();

  

 
  
  
