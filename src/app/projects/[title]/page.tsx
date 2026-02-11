'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const ProjectDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const titles = params.titles as string;

    // Your projects data (ideally import from a shared file)
    const projectsData: { [key: string]: any } = {
        app1: {
            projectImg: "/assets/project/shadowqatar.svg",
            heading: "Quotation to Invoice",
            fullDescription:
                "A comprehensive document management solution built with Next.js and Tailwind CSS that streamlines business operations. Features secure user authentication, automated quotation-to-invoice workflows, and integrated PDF generation. Implemented RESTful API architecture with Git version control for real-time document tracking and seamless inter-module communication.",
            techStack: [
                { tech: "Next.js" },
                { tech: "Nest.js" },
                { tech: "Tailwind CSS" },
                { tech: "Rest API" },
                { tech: "JWT" },
                { tech: "MySQL" },
                { tech: "Hostinger" }
            ],
            features: [
                "Secure user authentication with JWT",
                "Automated quotation to invoice conversion",
                "PDF generation and download",
                "Real-time document tracking",
                "RESTful API architecture"
            ],
            challenges: "Managing state across multiple document types and ensuring seamless workflow automation.",
            outcome: "Reduced document processing time by 60% and improved workflow efficiency."
        },
        app2: {
            projectImg: "/assets/project/clarks.png",
            heading: "Online Gallery Management System",
            fullDescription:
                "A secure, role-based gallery platform designed for design teams to collaborate efficiently. Built with approval workflows, task management, and real-time notifications to enhance operational transparency. Enables seamless upload, review, and approval processes with admin oversight.",
            techStack: [
                { tech: "Next.js" },
                { tech: "Nest.js" },
                { tech: "Tailwind CSS" },
                { tech: "Rest API" },
                { tech: "FCM" },
                { tech: "JWT" },
                { tech: "MySQL" },
                { tech: "Hostinger" }
            ],
            features: [
                "Role-based access control",
                "Multi-stage approval workflow",
                "Real-time push notifications via FCM",
                "Task assignment and tracking",
                "Admin dashboard with analytics"
            ],
            challenges: "Implementing complex approval workflows and real-time notification system.",
            outcome: "Improved team collaboration and reduced approval time by 45%."
        }
    };

    const project = projectsData[titles];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-(--bg-primary) bg-[url('/assets/bg-noise.png')]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-(--text-primary) mb-4">
                        Page under construction
                    </h1>
                    <p className="text-(--text-secondary) mb-6">
                        The detailed “Know More” page for this project is currently under development.
                        Live demo projects are available for viewing.
                    </p>
                    <button
                        onClick={() => router.push('/#projects')}
                        className="px-6 py-2 bg-linear-to-br from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-(--bg-primary) py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 text-(--text-secondary) hover:text-(--text-primary) flex items-center gap-2 transition-colors"
                >
                    ← Back to Projects
                </button>

                {/* Project Header */}
                <div className="mb-12">
                    <h1 className="text-2xl md:text-4xl font-bold text-(--text-primary) mb-4">
                        {project.heading}
                    </h1>
                    <p className="text-md text-(--text-secondary) leading-relaxed">
                        {project.fullDescription}
                    </p>
                </div>

                {/* Project Image */}
                <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src={project.projectImg}
                        alt={project.heading}
                        className="w-full h-120 object-cover"
                    />
                </div>

                {/* Tech Stack */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-(--text-primary) mb-6">
                        Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech: any, index: number) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-(--project-chip-bg) border border-(--project-border) text-(--text-secondary) rounded-full text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                            >
                                <span className="text-[#10b981]">#</span>
                                {tech.tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-(--text-primary) mb-6">
                        Key Features
                    </h2>
                    <ul className="space-y-3">
                        {project.features.map((feature: string, index: number) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-(--text-secondary)"
                            >
                                <span className="text-[#10b981] mt-1">✓</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Challenges & Outcome */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-(--exp-care-bg) p-6 rounded-2xl border border-(--project-border)">
                        <h3 className="text-xl font-bold text-(--text-primary) mb-3">
                            Challenges
                        </h3>
                        <p className="text-(--text-secondary)">{project.challenges}</p>
                    </div>
                    <div className="bg-(--exp-care-bg) p-6 rounded-2xl border border-(--project-border)">
                        <h3 className="text-xl font-bold text-(--text-primary) mb-3">
                            Outcome
                        </h3>
                        <p className="text-(--text-secondary)">{project.outcome}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;