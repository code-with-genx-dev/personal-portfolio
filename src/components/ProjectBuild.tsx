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
            subHeading: "A comprehensive document management solution built with Next.js and Tailwind CSS that streamlines business operations. Features secure user authentication, automated quotation-to-invoice workflows, and integrated PDF generation. Implemented RESTful API architecture with Git version control for real-time document tracking and seamless inter-module communication.",
            techStack: [
                { tech: "#Next.js" },
                { tech: "#Nest.js" },
                { tech: "#Tailwind CSS" },
                { tech: "#Rest API" },
                { tech: "#JWT" },
                { tech: "#MySQL" },
                { tech: "#Hostinger" }
            ],
            liveLink: "https://example.com",
            githubLink: "https://github.com/username/project"
        },
        {
            projectImg: "/assets/project/clarks.png",
            heading: "Online Gallery Management System for Shoe Company",
            subHeading: "A secure, role-based gallery platform designed for design teams to collaborate efficiently. Built with approval workflows, task management, and real-time notifications to enhance operational transparency. Enables seamless upload, review, and approval processes with admin oversight.",
            techStack: [
                { tech: "#Next.js" },
                { tech: "#Nest.js" },
                { tech: "#Tailwind CSS" },
                { tech: "#Rest API" },
                { tech: "#FCM" },
                { tech: "#JWT" },
                { tech: "#MySQL" },
                { tech: "#Hostinger" }
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
                                <div className=' rounded-lg overflow-hidden p-3 transition-colors duration-300 bg-(--project-bg) border border-(--project-border)  hover:border-(--project-hover-border) '>
                                    <img src={item.projectImg} alt={item.heading} className='w-full h-auto md:h-75 object-cover rounded-lg hover:scale-105 transition-transform duration-300' />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className='lg:w-1/2 w-full flex flex-col gap-4'>
                                <h3 className='font-incognito text-2xl md:text-3xl font-semibold text-(--text-primary)'>
                                    {item.heading}
                                </h3>
                                <p className='text-(--text-secondary) text-[14px] md:text-[14px] leading-relaxed'>
                                    {item.subHeading}
                                </p>
                                <div className='flex flex-wrap gap-2 mt-2'>
                                    {item.techStack.map((tech, techIndex) => (
                                        <span key={techIndex} className='px-3 py-1.5 cursor-pointer text-(--text-muted) rounded-full text-xs md:text-sm bg-(--project-chip-bg) border border-(--project-border) font-medium hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-(--text-primary) transition-colors duration-200'>
                                            {tech.tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className='flex gap-4 mt-4'>
                                    {item.liveLink && (
                                        <a href={item.liveLink} target='_blank' rel='noopener noreferrer' className='px-4 py-2  bg-(--btn-primary-bg) text-(--btn-primary-text)  hover:bg-(--btn-primary-hover) font-medium  rounded-md text-sm font-mediumtransition-colors duration-200'>
                                            Live Demo
                                        </a>
                                    )}
                                    {item.githubLink && (
                                        <a href={item.githubLink} target='_blank' rel='noopener noreferrer' className='px-4 py-2 border rounded-md text-sm font-medium border-(--btn-outline-border) text-(--btn-outline-text) hover:bg-(--btn-outline-hover-bg) hover:border-(--btn-outline-hover-border) transition-colors duration-200'>
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