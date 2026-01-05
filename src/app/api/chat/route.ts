import Groq from "groq-sdk";

export const runtime = "nodejs";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY!,
});

export const portfolioContext = `
Name: Visva V
Role: Frontend Developer
Experience: 1+ years
Location: Chennai, India

Professional Summary:
Frontend Developer with 1+ years of experience building scalable, responsive web applications.
Specialized in HRMS and business-driven products with strong focus on modular architecture,
performance optimization, and clean UI engineering.

Tech Stack:
- Next.js (App Router, SSR, modular architecture)
- React.js
- TypeScript
- JavaScript (ES6+)
- Tailwind CSS
- Framer Motion
- Zod (schema validation)
- RESTful API integration
- Firebase Cloud Messaging (FCM)
- Git & GitHub
- Redux
- MySQL
- Nest js

Core Expertise:
- Scalable component architecture
- Design systems and reusable UI patterns
- API-driven frontend development
- Form handling and validation
- Performance optimization and responsive layouts
- Agile and sprint-based development workflows

Work Experience:
Ardens Business Solutions – Frontend Developer
- Developed HRMS modules including Leave Management, Payroll, Attendance, and statutory payroll configurations.
- Implemented Bonus, Gratuity, and Form 16 features enabling secure tax document generation.
- Built reusable UI components, dashboards, and integrated real-time notifications using FCM.

Ardens Business Solutions – Frontend Developer Intern
- Contributed to HRMS frontend development using Next.js and Tailwind CSS.
- Integrated REST APIs and collaborated in Agile sprints with cross-functional teams.

Knackforge Soft Solutions – Software Developer Intern
- Built responsive interfaces using HTML, CSS, and JavaScript.
- Strengthened web fundamentals through real-world development tasks.

Projects:
- HRMS System with Payroll, Leave, and Attendance modules.
- End-to-End Quotation, Delivery Note, and Invoice Management web application with PDF generation.
- Online Gallery Management System with role-based access control and real-time notifications.
- Personal portfolio website showcasing projects, animations, and professional experience, integrated with a Grok AI chatbot for interactive engagement.

Strengths:
- Translating business requirements into scalable frontend solutions
- Writing clean, maintainable, and reusable code
- Strong UI/UX sense with attention to detail
- Problem-solving and continuous learning mindset

Career Interests:
- Product-based frontend development
- Scalable enterprise applications
- Performance-focused and design-driven interfaces

Contact:
- LinkedIn: https://www.linkedin.com/in/visva-v-a1a274229/
- GitHub: https://github.com/code-with-genx-dev
- Email: mrvisva591@gmail.com
`;


export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return Response.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const completion  = await groq.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: [
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
            reply: completion .choices[0].message.content ?? "",
        });
    } catch (error) {
        console.error("OpenAI Error:", error);
        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
