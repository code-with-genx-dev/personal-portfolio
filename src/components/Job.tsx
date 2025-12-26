import { Slide } from "@/app/animation/Slide"

interface props {
    deviceType: {
        mob: boolean,
        tab: boolean
    }
}
const Job: React.FC<props> = ({ deviceType }) => {
    //Work experience.
    const works = [
        {
            logo: "/assets/logo/abshrms_logo.jpg",
            org: "Ardens Business Solutions",
            role: "Frontend Developer",
            duration: "SEP 11 2024 - Present",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ex incidunt repellat ad magni cum facere, ea mollitia aspernatur esse aliquid aut fugit placeat, explicabo accusantium iste fuga ullam? Quos fuga placeat voluptates nesciunt."
        },
         {
            logo: "/assets/logo/abshrms_logo.jpg",
            org: "Ardens Business Solutions",
            role: "Frontend Developer Internship",
            duration: "JUL 10 2024 - SEP 10 2024",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ex incidunt repellat ad magni cum facere, ea mollitia aspernatur esse aliquid aut fugit placeat, explicabo accusantium iste fuga ullam? Quos fuga placeat voluptates nesciunt."
        },
        {
            logo: "/assets/logo/knackforge_logo.jpg",
            org: "Knackforge Soft Solutions",
            role: "Software Developer Internship",
            duration: "Mar 1 2024 - Mar 30 2024",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ex incidunt repellat ad magni cum facere, ea mollitia aspernatur esse aliquid aut fugit placeat, explicabo accusantium iste fuga ullam? Quos fuga placeat voluptates nesciunt."
        }
    ]

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
                    const isSideleft = index % 2 === 0
                    return (
                        <Slide key={index} direction="left" delay={index * 0.2}>
                            <div className='flex items-start md:gap-x-9 gap-x-3 w-full pb-8'>
                                <div className='flex flex-col items-center'>
                                    <div className='w-16.25 h-16.25 rounded-md border p-2.5  bg-(--job-bg) border-(--job-border)'>
                                        <img src={`${item?.logo}`} alt="" className="" />
                                    </div>
                                    <div className='h-32 w-0.5 border-l border-(--job-border)'></div>
                                </div>
                                <div key={index} className={`flex flex-col gap-y-1 mb-5`}>
                                    <p className="font-incognito text-xl text-(--text-primary)">{item?.org}</p>
                                    <p className="text-sm font-semibold text-(--text-secondary)">{item?.role}</p>
                                    <p className={`text-zinc-400 mb-1.5`}>{formatDuration(item.duration)}</p>
                                    <p className="md:w-[65%] text-(--text-secondary) text-sm">{item?.description}</p>
                                </div>
                            </div>
                        </Slide>
                    )
                })
            }
        </div>
    )
}

export default Job
