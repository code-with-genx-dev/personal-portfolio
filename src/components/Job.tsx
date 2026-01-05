import { Slide } from "@/app/animation/Slide"
import { span } from "framer-motion/client";

const Job = () => {
    const works = [
        {
            logo: "/assets/logo/abshrms_logo.jpg",
            org: "Ardens Business Solutions",
            role: "Frontend Developer",
            duration: "SEP 11 2024 - Present",
            description: [
                {
                    point: "Architected scalable HRMS frontend modules using Next.js, following modular component architecture, responsive Tailwind CSS layouts, and reusable design patterns across payroll features."
                },
                {
                    point: "Designed and implemented a configurable Leave Management system in Next.js, integrating RESTful APIs, Payroll, and Attendance workflows with policy-driven validations using Zod."
                },
                {
                    point: "Developed statutory payroll configurations for Bonus, Gratuity, and Form 16, enabling secure tax document generation, FCM notifications, and performance optimizations within Agile sprints."
                }

            ]
        },
        {
            logo: "/assets/logo/abshrms_logo.jpg",
            org: "Ardens Business Solutions",
            role: "Frontend Developer Internship",
            duration: "JUL 10 2024 - SEP 10 2024",
            description: [
                {
                    point: "Supported frontend development using Next.js, and Tailwind CSS, contributing reusable UI components for HRMS application features."
                },
                {
                    point: "Integrated RESTful APIs and handled frontend data flow while improving responsiveness and usability across internal product modules."
                },
                {
                    point: "Collaborated with senior developers in Agile sprints, learning production workflows, coding standards, and real-world software development practices."
                }
            ]
        },
        {
            logo: "/assets/logo/knackforge_logo.jpg",
            org: "Knackforge Soft Solutions",
            role: "Software Developer Internship",
            duration: "Mar 1 2024 - Mar 30 2024",
            description: [
                {
                    point: "Gained hands-on experience building responsive web interfaces using HTML, CSS, and JavaScript in a professional internship environment."
                },
                {
                    point: "Developed small functional components and layouts while strengthening core web development fundamentals and practical problem-solving skills."
                },
                {
                    point: "Learned industry best practices, debugging techniques, and teamwork by contributing to real-time tasks under mentor guidance."
                }
            ]
        }
    ];


    const formatDuration = (duration: string) => {
        if (duration.includes("Present")) {
            const parts = duration.split("Present");
            return (
                <>
                    {parts[0]}
                    <span className="text-[#10b981]">Present</span>
                    {parts[1]}
                </>
            );
        }
        return duration;
    };
    return (
        <div>
            {
                works?.map((item: any, index: any) => {
                    return (
                        <Slide key={index} direction="left" delay={index * 0.2}>
                            <div className='flex items-start md:gap-x-9 gap-x-3 w-full pb-8'>
                                <div className='flex flex-col items-center'>
                                    <div className='w-16.25 h-16.25 rounded-md border p-2.5  bg-(--job-bg) border-(--job-border)'>
                                        <img src={`${item?.logo}`} alt="" className="" />
                                    </div>
                                    <div className='h-34 w-0.5 border-l border-(--job-border)'></div>
                                </div>
                                <div key={index} className={`flex flex-col gap-y-1 mb-5`}>
                                    <p className="font-incognito text-xl text-(--text-primary)">{item?.org}</p>
                                    <p className="text-sm font-semibold text-(--text-secondary)">{item?.role}</p>
                                    <p className={`text-zinc-400 mb-1.5`}>{formatDuration(item.duration)}</p>
                                    <div className="md:w-[68%] pl-4 text-(--text-secondary) text-sm space-y-1">
                                        {item?.description?.map((desc: any, i: number) => (
                                            <div key={i} className="flex items-start gap-1 leading-6">
                                            <span className="text-[#10b981] font-bold">#</span><p key={i}>{desc.point}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    )
                })
            }
        </div>
    )
}

export default Job;
