import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyDFLVNo6fZBZtK8LAy2fI1a7uzAH-I_Bl8')


export const getGeminiModel = async()=>{
  return genAI.getGenerativeModel({model: 'gemini-1.5-pro'})
}

export const getMovieRecom = async (watchlist) => {
  try {
    const model = await getGeminiModel();
    
    // Create a prompt based on the user's watchlist
    const prompt = `Based on these movies in the user's watchlist: 
    ${watchlist.map(movie => `- ${movie.title}`).join("\n")}
    
    Please recommend 5 similar movies. For each movie, provide:
    - Title
    - Brief reason why it's recommended
    - Confidence score (0-100)
    
    Return the response in this JSON format (DO NOT include any markdown like \`\`\`json):
    {
      "recommendations": [
        {
          "title": "Movie Title",
          "reason": "Reason for recommendation",
          "confidence": 85
        }
      ]
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text(); 

    const cleanText = text.replace(/```json|```/g, "").trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return { recommendations: [] };
  }
};
