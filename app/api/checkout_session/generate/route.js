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

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "Generate a set of 10 flashcards to help with studying and memorizing key concepts. Each flashcard should have a question, term, or prompt on one side, and the corresponding answer, definition, or explanation on the other side. The content should be concise, clear, and focused on the essential points. Ensure the flashcards are well-organized and categorized if necessary. The questions or prompts should challenge the user to recall important information. Provide examples where relevant.\nReturn in the following jason format:{\n\"flashvards:{\n   \"front\": str,\n\"back\": str\n\n}\n\n}",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
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
export async function run() {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "planets\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"flashcards\": [\n    {\n      \"front\": \"What is the largest planet in our solar system?\",\n      \"back\": \"Jupiter\"\n    },\n    {\n      \"front\": \"Which planet is known for its beautiful rings?\",\n      \"back\": \"Saturn\"\n    },\n    {\n      \"front\": \"What is the hottest planet in our solar system?\",\n      \"back\": \"Venus\"\n    },\n    {\n      \"front\": \"Which planet is closest to the Sun?\",\n      \"back\": \"Mercury\"\n    },\n    {\n      \"front\": \"What is the only planet known to support life?\",\n      \"back\": \"Earth\"\n    },\n    {\n      \"front\": \"Which planet is known for its red color?\",\n      \"back\": \"Mars\"\n    },\n    {\n      \"front\": \"What is the largest moon in our solar system?\",\n      \"back\": \"Ganymede (a moon of Jupiter)\"\n    },\n    {\n      \"front\": \"Describe the characteristics of a gas giant.\",\n      \"back\": \"Large, mostly made of gas (hydrogen and helium), no solid surface, have many moons, low density\"\n    },\n    {\n      \"front\": \"What are the four inner planets of our solar system called?\",\n      \"back\": \"Terrestrial planets (Mercury, Venus, Earth, Mars)\"\n    },\n    {\n      \"front\": \"What is the difference between a dwarf planet and a planet?\",\n      \"back\": \"A dwarf planet does not have enough gravity to clear its orbital path of other objects, while a planet does.\"\n    }\n  ]\n}\n```"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "animals"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"flashcards\": [\n    {\n      \"front\": \"What is the largest land animal?\",\n      \"back\": \"African Bush Elephant\"\n    },\n    {\n      \"front\": \"What is the fastest land animal?\",\n      \"back\": \"Cheetah\"\n    },\n    {\n      \"front\": \"What is the largest animal on Earth?\",\n      \"back\": \"Blue Whale\"\n    },\n    {\n      \"front\": \"What is the difference between a mammal and a reptile?\",\n      \"back\": \"Mammals have fur or hair, give birth to live young, and nurse their offspring. Reptiles have scales, lay eggs, and are cold-blooded.\"\n    },\n    {\n      \"front\": \"What is an example of an invertebrate?\",\n      \"back\": \"Insects, worms, spiders, jellyfish, etc.\"\n    },\n    {\n      \"front\": \"What is the name of the process by which insects change their form?\",\n      \"back\": \"Metamorphosis\"\n    },\n    {\n      \"front\": \"What is the difference between a carnivore, herbivore, and omnivore?\",\n      \"back\": \"Carnivores eat meat, herbivores eat plants, and omnivores eat both meat and plants.\"\n    },\n    {\n      \"front\": \"What is the name of the largest group of animals on Earth?\",\n      \"back\": \"Arthropods (insects, spiders, crustaceans, etc.)\"\n    },\n    {\n      \"front\": \"What is the difference between a bird and a mammal?\",\n      \"back\": \"Birds have feathers, wings, and lay eggs. Mammals have fur or hair, give birth to live young, and nurse their offspring.\"\n    },\n    {\n      \"front\": \"What is the name of the process by which animals camouflage themselves?\",\n      \"back\": \"Crypsis\"\n    }\n  ]\n}\n```"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}


export async function POST(request) {
    const data = await request.json(); 
    const text = data.text; 

   
    const flashcards = [{ id: 1, content: text }]; 

    return new Response(JSON.stringify(flashcards), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
}
