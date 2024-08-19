const process = require('node:process');

const CHAT_API_URL = "https://chat.maritaca.ai/api/chat/inference";

if (!process.env.MARITALK_API_KEY) {
    console.error("Environment variable MARITALK_API_KEY not found!");
    process.exit(1);
}

async function sendChatRequest(message) {
    try {
        const params = {
            messages: [{ "role": "user", "content": message }],
            do_sample: true,
            max_tokens: 50,
            temperature: 0.4,
            top_p: 0.95,
            model: "sabia-3",
        };

        const response = await fetch(CHAT_API_URL, {
            headers: {
                "Authorization": `Key ${process.env.MARITALK_API_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending chat request:", error);
        throw error;
    }
}

async function main() {
    try {
        const result = await sendChatRequest('Olá, qual é seu nome?');
        console.log("Response:", result);
    } catch (error) {
        console.error("Error in main function:", error);
    }
}

main();
