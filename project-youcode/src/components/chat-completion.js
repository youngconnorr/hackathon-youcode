// import functions from "firebase-functions";
// import admin from "firebase-admin";
// import OpenAI from "openai";


import { https } from "firebase-functions";
import { apps, initializeApp } from "firebase-admin";
import OpenAI from "openai";

if (apps.length === 0) {
    initializeApp();
}

export const chatCompletion = https.onCall(async (data) => {

    const { prompt } = data;
    const OPENAI_API_KEY = import.meta.env.VITE_REACT_APP_OPENAI_API_KEY;
    const openai = new OpenAI({apiKey: OPENAI_API_KEY});
    const aiModel = "gpt-3.5-turbo-1106";

    const messages = [
        {
            role:"system",
            content: "Act as a trainer that is focused on well-being and working out and suggests specific workouts or well-being"
        },
        {
            role:"user",
            content:prompt
        },
    ]

    const completion = await openai.chat.completeions.create({
        model:aiModel,
        messages:messages
    })

    const aiResponse = completion.choices[0].message.content

    return {
        aiResponse
    }


})