import OpenAI from "openai";

export const runtime = "nodejs"; 

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});
console.log(client)
console.log(process.env.OPENAI_API_KEY!,"process.env.OPENAI_API_KEY!")

export const portfolioContext = `
Name: Visva
Role: Frontend Developer
Experience: 1+ year

Tech Stack:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Projects:
- ERP system with Accounts & Payroll
- Quotation & Invoice web app
- Portfolio website

Strengths:
- Component architecture
- Design systems
- Performance optimization

Contact:
- LinkedIn
- GitHub
`;

export async function POST(req: Request) {
    console.log(req)
    try {
        const { message } = await req.json();

        if (!message) {
            return Response.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const response = await client.responses.create({
            model: "gpt-4o-mini",
            input: [
                {
                    role: "system",
                    content: `You are Visva's portfolio assistant.Use the information below to answer accurately
                    Rules:
                    - Answer only using the provided portfolio context
                    - If unsure, say you don't know
                    - Do not hallucinate
                    - Keep answers short and professional
                    - Tone: friendly, confident frontend developer
                    Portfolio context:${portfolioContext}`
                },
                {
                    role: "user",
                    content: message
                }
            ],
        });

        return Response.json({
            reply: response.output_text ?? "",
        });
    } catch (error) {
        console.error("OpenAI Error:", error);

        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
