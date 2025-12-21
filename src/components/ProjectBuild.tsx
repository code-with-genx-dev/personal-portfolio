"use client";
import { Slide } from '@/app/animation/Slide';
import React from 'react';

interface TechStack {
    tech: string;
}

interface Project {
    projectImg: string;
    heading: string;
    subHeading: string;
    techStack: TechStack[];
    liveLink?: string;
    githubLink?: string;
}

interface ProjectsProps {
    deviceType?: {
        mob: boolean;
        tab: boolean;
    }
}

const Projects: React.FC<ProjectsProps> = ({ deviceType }) => {
    const projects: Project[] = [
        {
            projectImg: "/assets/project/shadowqatar.svg",
            heading: "Quotation to Invoice",
            subHeading: "A comprehensive quotation and invoice management system that streamlines business workflows. Built with modern technologies to deliver seamless user experience and efficient data handling.",
            techStack: [
                { tech: "Next.js" },
                { tech: "Nest.js" },
                { tech: "Tailwind CSS" },
                { tech: "MySQL" },
                { tech: "Hostinger" }
            ],
            liveLink: "https://example.com",
            githubLink: "https://github.com/username/project"
        },
        {
            projectImg: "/assets/project/clarks.png",
            heading: "E-Commerce Platform",
            subHeading: "A full-featured e-commerce solution with advanced product filtering, secure payment integration, and real-time inventory management. Designed for optimal performance across all devices.",
            techStack: [
                { tech: "Next.js" },
                { tech: "Nest.js" },
                { tech: "Tailwind CSS" },
                { tech: "MySQL" },
                { tech: "Hostinger" }
            ],
            liveLink: "https://example.com",
            githubLink: "https://github.com/username/project"
        }
    ];

    return (
        <div className='w-full space-y-16'>
            {projects.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                    <Slide
                        key={index}
                        direction={isEven ? "left" : "right"}
                        delay={index * 0.2}
                    >
                        <div className={`flex lg:flex-row flex-col ${!isEven ? 'lg:flex-row-reverse' : ''} items-start justify-between gap-8 lg:gap-12`}>
                            {/* Project Image */}
                            <div className='lg:w-1/2 w-full'>
                                <div className='border border-[#30303098] rounded-lg overflow-hidden bg-[#27272b66] p-3 hover:border-zinc-600 transition-colors duration-300'>
                                    <img src={item.projectImg} alt={item.heading} className='w-full h-auto md:h-75 object-cover rounded-lg hover:scale-105 transition-transform duration-300' />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                                <h3 className='font-incognito text-2xl md:text-3xl font-semibold text-white'>
                                    {item.heading}
                                </h3>
                                <p className='text-[#e5e7eb] text-sm md:text-base leading-relaxed'>
                                    {item.subHeading}
                                </p>
                                <div className='flex flex-wrap gap-2 mt-2'>
                                    {item.techStack.map((tech, techIndex) => (
                                        <span key={techIndex} className='px-3 py-1.5 bg-[#27272b66] border border-[#30303098] rounded-full text-xs md:text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors duration-200'>
                                            {tech.tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className='flex gap-4 mt-4'>
                                    {item.liveLink && (
                                        <a href={item.liveLink} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors duration-200'>
                                            Live Demo
                                        </a>
                                    )}
                                    {item.githubLink && (
                                        <a href={item.githubLink} target='_blank' rel='noopener noreferrer' className='px-4 py-2 border border-[#30303098] text-white rounded-md text-sm font-medium hover:border-zinc-600 hover:bg-[#27272b66] transition-colors duration-200'>
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Slide>
                );
            })}
        </div>
    );
};

export default Projects;