'use client';

import { useState, useEffect } from 'react';

const aboutCommands = [
    {
        command: 'whoami',
        output: 'Visva V — Frontend Developer',
        description: 'Building scalable, production-ready web applications'
    },
    {
        command: 'ls skills/',
        output: `Frontend/            Backend/           Tools/
Next.js              REST APIs          Git
React.js             FCM                GitHub
TypeScript           MVC Architecture   Redux
Tailwind CSS         MySQL              Zod
HTML5 / CSS3         NestJS (integration) Agile`,
        description: 'My technical skill set'
    },
    {
        command: 'cat experience.txt',
        output: `> Frontend Developer at Ardens Business Solutions
> Owned Leave and Attendance modules within HRMS
> Built dynamic form components and reusable UI systems
> Fixed UI issues, improved stability, and supported Agile sprint deliveries
> Contributed to Bonus, Gratuity, and Form 16 statutory modules
> Supported CI/CD deployments across dev, UAT, and production`,
        description: 'Professional experience'
    },
    {
        command: 'cat projects.md',
        output: `- End-to-end Quotation, Delivery Note, and Invoice management system
  Built with Next.js, Tailwind CSS, NestJS APIs, MySQL, and secure PDF generation

- Online Gallery Management System for a shoe company
  Implemented role-based access control, task workflows, and real-time notifications`,
        description: 'Selected projects'
    },
    {
        command: 'echo $PHILOSOPHY',
        output: 'I focus on clean architecture, reusable components, and building reliable user interfaces that scale with real business needs.',
        description: 'How I approach frontend engineering'
    }
];


export default function AboutTerminal() {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const currentCommand = aboutCommands[currentCommandIndex];

    // Typing animation effect
    useEffect(() => {
        if (!isTyping) return;

        let currentIndex = 0;
        const textToType = currentCommand.output;
        setDisplayedText('');

        const typingInterval = setInterval(() => {
            if (currentIndex <= textToType.length) {
                setDisplayedText(textToType.slice(0, currentIndex));
                currentIndex++;
            } else {
                setIsTyping(false);
                clearInterval(typingInterval);
            }
        }, 20);

        return () => clearInterval(typingInterval);
    }, [isTyping, currentCommand]);

    // Cursor blink effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    const executeCommand = (index: any) => {
        setCurrentCommandIndex(index);
        setIsTyping(true);
        setDisplayedText('');
    };

    const nextCommand = () => {
        const nextIndex = (currentCommandIndex + 1) % aboutCommands.length;
        executeCommand(nextIndex);
    };

    const prevCommand = () => {
        const prevIndex = currentCommandIndex === 0 ? aboutCommands.length - 1 : currentCommandIndex - 1;
        executeCommand(prevIndex);
    };

    // Initial load
    useEffect(() => {
        setIsTyping(true);
    }, []);

    return (

        <div className="">
            {/* Terminal Window */}
            <div className="w-75 md:w-200 bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl  border border-slate-700/50">
                {/* Terminal Header */}
                <div className="bg-linear-to-r from-slate-800 to-slate-700 px-4 py-2 rounded-t-xl flex items-center justify-between border-b border-slate-600/50">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                    </div>
                    <span className="text-slate-300 text-sm font-mono font-semibold">About Terminal</span>
                    <span className="text-slate-400 text-xs font-mono ml-2">~/about-me</span>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-[12px]  flex flex-col">

                    {/* Command Prompt */}
                    <div className="mb-3 text-[12px]">
                        <span className="text-cyan-400">visitor@portfolio</span>
                        <span className="text-slate-400">:</span>
                        <span className="text-purple-400">~/about</span>
                        <span className="text-slate-400">$ </span>
                        <span className="text-yellow-300">{currentCommand.command}</span>
                    </div>

                    {/* Output */}
                    <div className="flex-1 mb-6">
                        <div className="bg-slate-800/40 rounded-lg p-2 border border-slate-700/30">
                            <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed text-[12px]">
                                {displayedText}
                                {isTyping && showCursor && <span className="text-emerald-400">▊</span>}
                            </pre>
                        </div>

                        {/* Description */}
                        {!isTyping && (
                            <div className="mt-2 text-slate-500 text-xs italic">
                                → {currentCommand.description}
                            </div>
                        )}
                    </div>

                    {/* Command Navigation */}
                    <div className="flex items-center justify-between border-t border-slate-700/50 pt-3">
                        <div className="flex gap-2">
                            <button
                                onClick={prevCommand}
                                disabled={isTyping}
                                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:opacity-50 text-slate-300 rounded-lg transition-all font-mono text-xs flex items-center gap-2 border border-slate-600 hover:border-slate-500"
                            >
                                <span>←</span>
                            </button>
                            <button
                                onClick={nextCommand}
                                disabled={isTyping}
                                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:opacity-50 text-slate-300 rounded-lg transition-all font-mono text-xs flex items-center gap-2 border border-slate-600 hover:border-slate-500"
                            >
                                <span>→</span>
                            </button>
                        </div>

                        {/* Command Indicators */}
                        <div className="flex gap-2">
                            {aboutCommands.map((cmd, index) => (
                                <button
                                    key={index}
                                    onClick={() => executeCommand(index)}
                                    disabled={isTyping}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentCommandIndex
                                        ? 'bg-emerald-400 w-6'
                                        : 'bg-slate-600 hover:bg-slate-500'
                                        }`}
                                    title={cmd.command}
                                />
                            ))}
                        </div>

                        <div className="text-slate-600 text-[10px] font-mono">
                            {currentCommandIndex + 1} / {aboutCommands.length}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className="mt-2 text-center">
                <div className="text-slate-500 text-[11px] font-mono mb-3">
                    <span className="text-emerald-400">Tip:</span> Navigate through commands to learn more about me
                </div>
            </div>
        </div>
    );
}