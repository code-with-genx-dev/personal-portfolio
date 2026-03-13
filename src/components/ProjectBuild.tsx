import { Slide } from "@/app/animation/Slide";
import { useRouter } from "next/navigation";

const ProjectBuild = () => {
    const router = useRouter()
    const projects = [
        {
            projectImg: "/assets/project/career.png",
            heading: "CareerCompass",
            subHeading:
                "CareerCompass AI – An AI-powered platform analyzing personality, aptitude, interests, and academics to recommend ideal career paths with a personalized 5-year roadmap.",
            techStack: [
                { tech: "React.js" },
                { tech: "Express.js" },
                { tech: "Tailwind CSS" },
                { tech: "REST Api's" },
                { tech: "Node.js" },
                { tech: "PostgreSQL" },
                { tech: "Vercel" },
                { tech: "Render" },
            ],
            liveLink: "https://career-client-eight.vercel.app/",
            githubLink: "app1",
            liveDemo: true
        },
        {
            projectImg: "/assets/project/shadowqatar.svg",
            heading: "Quotation to Invoice",
            subHeading:
                "Full-stack business app automating quotations, delivery notes, invoices with secure authentication.",
            techStack: [
                { tech: "Next.js" },
                { tech: "Nest.js" },
                { tech: "Tailwind CSS" },
                { tech: "REST Api's" },
                { tech: "JWT" },
                { tech: "MySQL" },
                { tech: "Hostinger" }
            ],
            liveLink: "https://example.com",
            githubLink: "app1",
            liveDemo: false
        },
        {
            projectImg: "/assets/project/clarks.png",
            heading: "Online Gallery Management System",
            subHeading:
                "Role-based gallery system for uploading, reviewing, approving assets with notifications.",
            techStack: [
                { tech: "Next.js" },
                { tech: "Nest.js" },
                { tech: "Tailwind CSS" },
                { tech: "REST Api's" },
                { tech: "FCM" },
                { tech: "JWT" },
                { tech: "MySQL" },
                { tech: "Hostinger" }
            ],
            liveLink: "https://example.com",
            githubLink: "app2",
            liveDemo: false
        },
        {
            projectImg: "/assets/project/qrix.png",
            heading: "Qrix",
            subHeading:
                "Lightweight QR generator creating downloadable codes using public API.",
            techStack: [
                { tech: "React.js" },
                { tech: "Tailwind CSS" },
                { tech: "qrserver API" }
            ],
            liveLink: "https://qrix.vercel.app/",
            githubLink: "https://github.com/username/project",
            liveDemo: true
        },
        {
            projectImg: "/assets/project/valutixx.png",
            heading: "Vaultix",
            subHeading:
                "Client-side encryption tool securing messages using modern browser cryptography.",
            techStack: [
                { tech: "Next.js" },
                { tech: "Tailwind CSS" },
                { tech: "AES" }
            ],
            liveLink: "https://vaultixx.vercel.app/",
            githubLink: "https://github.com/username/project",
            liveDemo: true
        }
    ];



    function route(link: any, route: any, isrouteorlink: boolean) {
        if (isrouteorlink) {
            window.open(link, "_blank")
        } else {
            router.push(`/projects/${route}`)
        }
    }

    const ProjectCard = ({ project, index }: any) => {
        return (
            <Slide direction="down" delay={0.5} key={index} className="group/card flex flex-col bg-(--exp-care-bg) cursor-pointer overflow-hidden rounded-3xl  backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_32px_rgba(16,185,129,0.20)] transition-all duration-1000 hover:-translate-y-4 pb-4">
                <img src={project.projectImg} alt={project.heading} className="w-full h-45 object-cover group/card-hover:scale-110 transition-all duration-700" />
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex flex-col gap-2 text-(--text-secondary)">
                        <p className="font-semibold">{project.heading}</p>
                        <p className="text-[12px]">{project.subHeading}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((item: any, index: any) => (
                            <p key={index} className="text-xs text-(--text-secondary)">
                                <span className="text-[#10b981]">#</span>{item.tech}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center  mt-auto">
                    <button onClick={() => route(project?.liveLink, project?.githubLink, project?.liveDemo)} className="text-[12px] group/card-hover:text-[13px] bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl text-white px-4 py-1 transition-all duration-500 group/card-hover:px-5 group/card-hover:py-1.5 cursor-pointer flex items-center gap-1">{project?.liveDemo ? "Live demo" : "Know more"}</button>
                </div>
            </Slide>
        )
    }

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 lg:gap-16">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default ProjectBuild