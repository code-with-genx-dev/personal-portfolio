"use client";
import React from 'react';

const Skills = () => {
    const skills = [
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "ts" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Nest.js", icon: "nestjs" },
        { name: "Node.js", icon: "nodejs" },
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "Redux", icon: "redux" },
        { name: "MySQL", icon: "mysql" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Firebase", icon: "firebase" },
        { name: "Vercel", icon: "vercel" }
    ];

    return (
        <div className="w-full rounded-2xl overflow-hidden py-8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-50 bg-linear-to-r from-black/20 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-50 bg-linear-to-l from-black/20 to-transparent z-10 pointer-events-none"></div>
            <div className="relative flex">
                <div className="flex animate-marquee gap-8 md:gap-16">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-3 min-w-20 md:min-w-25 shrink-0"
                        >
                            <div className='flex items-center gap-2'>
                                {/* <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-[#27272b66] border border-[#30303098] rounded-lg p-3 hover:border-zinc-600 transition-colors duration-200"> */}
                                <img
                                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                    alt={skill.name}
                                    className="w-10 h-10 object-contain"
                                />
                                {/* </div> */}
                                <span className="text-xs md:text-sm text-zinc-300 text-center">{skill.name}</span>
                            </div>
                        </div>
                    ))}

                    {skills.map((skill, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="flex flex-col items-center gap-3 min-w-20 md:min-w-25 shrink-0"
                        >
                            <div className='flex items-center gap-2'>
                                {/* <div className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-[#27272b66] border border-[#30303098] rounded-lg p-3 hover:border-zinc-600 transition-colors duration-200"> */}
                                <img
                                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                    alt={skill.name}
                                    className="w-10 h-10 object-contain"
                                />
                                {/* </div> */}
                                <span className="text-xs md:text-sm text-zinc-300 text-center">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;