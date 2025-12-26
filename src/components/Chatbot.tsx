"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiChatAiLine, RiChatSmileAiFill } from "react-icons/ri";
import { IoClose, IoSend } from "react-icons/io5";
import { ThinkingLoader } from "@/app/animation/Thinker";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<any>([]);
    const [loading, setLoading] = useState(false);


    const sendMessage = async () => {
        if (!input || loading) return;

        setMessages((prev: any) => [...prev, { role: "user", text: input }]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            setMessages((prev: any) => [...prev, { role: "bot", text: data.reply }]);
        } catch {
            setMessages((prev: any) => [
                ...prev,
                { role: "bot", text: "Something went wrong 😢" },
            ]);
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <button onClick={() => setOpen(!open)} className="fixed bottom-14 right-4  text-black px-4 py-3 rounded-full z-1000 cursor-pointer" >
                <RiChatSmileAiFill className="text-accent" size={35} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        className="fixed bottom-20 right-6 w-80 bg-black border border-white/10 rounded-xl px-4 pb-4 z-1000 no-scrollbar"
                    >
                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-2 text-[14px]">
                                <RiChatAiLine size={20} className="text-accent" />
                                <p className="text-accent">Ask Tony</p>
                            </div>
                            <IoClose className="text-accent cursor-pointer" size={20} onClick={() => setOpen(!open)} />
                        </div>
                        <hr />

                        <div className="h-56 overflow-y-auto text-sm text-white space-y-4 mt-2">
                            {messages.map((msg: any, i: any) => (
                                <div key={i} className={`flex text-[12px] leading-relaxed ${msg?.role === "user" ? "justify-end" : "text-start"}`}>
                                    <div className={`max-w-[80%] px-2 py-1 rounded-md text-sm ${msg.role === "user" ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" : "bg-zinc-800 text-gray-200"}`}>
                                        <span className=" font-medium text-xs mb-1 opacity-70">
                                            {msg?.role === "user" ? "You: " : "Tony: "}
                                        </span>
                                        <span className={``}>
                                            {msg?.text}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {loading && <ThinkingLoader />}
                        </div>

                        <div className="flex gap-2 mt-3">
                            <input
                                className="flex-1 bg-zinc-900 px-3 py-1 text-sm rounded text-white focus:border-[text-accent] focus:outline-[text-accent]"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me..."
                                disabled={loading}
                                onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
                            />
                            <button className="text-[#27b173]" disabled={loading}>
                                <IoSend onClick={sendMessage} className="text-accent cursor-pointer" size={23} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
