import { Slide } from "@/app/animation/Slide"
import { BsStars } from "react-icons/bs";

const Job = () => {
    const works = [
        {
            logo: "/assets/logo/abshrms_logo.jpg",
            org: "Ardens Business Solutions",
            role: "Frontend Developer",
            duration: "SEP 11 2024 - Present",
            description: [
                {
                    "point": "Led frontend development of HRMS modules including Leave, Attendance using Next.js, TypeScript, and Tailwind CSS with scalable component architecture and modular design patterns."
                },
                {
                    "point": "Designed and implemented dynamic, configuration-driven form systems with reusable components, handling complex business rules, validations, and state management using Zod."
                },
                {
                    "point": "Owned UI debugging, refactoring, and optimization across multiple modules, delivering statutory payroll features like Bonus, Gratuity, and Form 16 while collaborating in Agile CI/CD-driven production releases."
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
                    "point": "Strengthened frontend fundamentals by building React and Next.js components while learning core design principles, component architecture, and clean coding practices."
                },
                {
                    "point": "Gained hands-on experience integrating REST APIs, debugging UI issues, and improving responsiveness using Tailwind CSS across internal HRMS modules."
                },
                {
                    "point": "Collaborated with senior developers in Agile sprints, understanding real-world development workflows, version control practices, and production-level problem solving."
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
                        <Slide key={index} direction="left" className="md:mx-4 lg:mx-28 rounded-lg bg-(--exp-care-bg) mb-10 shadow-lg" delay={index * 0.2}>
                            <div className='flex flex-col md:flex-row items-start md:gap-x-8 gap-y-3 w-full h-full md:p-8 p-2 '>
                                <div className='flex'>
                                    <div className='w-16.25 h-16.25 rounded-md border p-2.5 md:justify-center  bg-(--job-bg) border-(--job-border)'>
                                        <img src={`${item?.logo}`} alt="" className="" />
                                    </div>
                                </div>
                                <div key={index} className={`flex flex-col gap-y-1 mb-5`}>
                                    <p className="font-incognito text-xl text-(--text-primary)">{item?.org}</p>
                                    <p className="text-sm font-semibold text-(--text-secondary)">{item?.role}</p>
                                    <p className={`text-zinc-400 text-[14px] mb-1.5`}>{formatDuration(item.duration)}</p>
                                    <div className="md:pl-4 pt-3 text-(--text-secondary) text-sm space-y-4">
                                        {item?.description?.map((desc: any, i: number) => (
                                            <Slide direction="left" delay={0.2} key={i} className="flex items-start gap-1 leading-6">
                                                <span className="text-[#10b981] font-bold"><BsStars size={20} className="mt-1" /></span><p key={i}>{desc.point}</p>
                                            </Slide>
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
