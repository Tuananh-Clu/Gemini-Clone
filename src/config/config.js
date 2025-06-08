// config/config.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// ⚠️ Don't commit your API key publicly! Use environment variables instead.
const genAI = new GoogleGenerativeAI("AIzaSyBp9pgiyd2hHL1-WkwiBkp1cY7JM_wcFfk");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function main(prompt) {
  try {
    const result = await model.generateContent(prompt);

    // If result.response is a Fetch-like response, get text with await:
    if (result.response && typeof result.response.text === "function") {
      const text = await result.response.text();
      console.log(text);
      return text;
    }

    // Otherwise, assume the text is directly in result or result.text:
    const text = result.text || result;
    console.log(text);
    return text;
    
  } catch (error) {
    console.error("Error from Gemini API:", error);
    return "Error: Unable to fetch response";
  }
}

export default main;
