'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Carousel from '../components/Carousel';
import { link } from 'fs';
import Link from 'next/link';

const ProjectDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const title = params.title as string;

    // Project Data
    const projectsData: { [key: string]: any } = {
        app1: {
            projectOverview: "This project was developed to digitize and streamline a client’s end-to-end sales documentation workflow, including Quotation, Delivery Challan, and Invoice management. The objective was to build a structured mini ERP-style web application that ensures seamless document creation, organized tracking, and smooth transformation across all stages of the sales process.",
            problemStatement: "The client previously managed quotations and invoices manually, which resulted in unstructured workflows, repetitive data entry, and difficulty in tracking document status. There was no standardized conversion process between quotation, challan, and invoice stages, and generating professional PDF documents required additional manual effort. These inefficiencies slowed down operations and increased the risk of errors.",
            solution: "To address these challenges, we developed a structured web-based system that organizes the complete document lifecycle. Users can dynamically create quotations with real-time preview rendering, add multiple line items, calculate totals automatically, and save records in a structured format. The system allows seamless conversion of quotations into Delivery Challans or Invoices without re-entering data, while also supporting independent document creation when required. Each module includes dedicated summary tracking and downloadable PDF generation, ensuring a professional and organized workflow.",
            workflowStructure: "The application follows a clear and structured document flow. Users begin by creating a quotation using a dynamic form interface with instant preview support. Once finalized, the quotation can either remain as a standalone document or be converted into a Delivery Challan or Invoice. Delivery Challans and Invoices can also be generated independently if needed. Each document type maintains its own summary history page for tracking and management, ensuring complete visibility across the sales lifecycle.",
            keyFeatures: [
                { point: "JWT-based authentication with role-based access control" },
                { point: "Dynamic form handling with real-time document preview" },
                { point: "Line item management with automated total calculations" },
                { point: "Professional PDF generation for all document types" },
                { point: "Seamless document conversion (Quotation → Challan → Invoice)" },
                { point: "Independent module creation support" },
                { point: "Structured summary and history tracking pages" },
            ],
            pics: [
                "/assets/project/app2/login.jpeg",
                "/assets/project/app2/signup.jpeg",
                "/assets/project/app2/maindashboard.jpeg",
                "/assets/project/app2/quotationPreview.jpeg",
                "/assets/project/app2/quotationdownload.jpeg",
                "/assets/project/app2/moveforward.jpeg",
                "/assets/project/app2/overallHistory.jpeg",
                "/assets/project/app2/profile.jpeg",
            ],
            techStack: [
                {
                    tech: "Next.js",
                    link: "https://nextjs.org/"
                },
                {
                    tech: "Nest.js",
                    link: "https://nestjs.com/"
                },
                {
                    tech: "Tailwind CSS",
                    link: "https://tailwindcss.com/"
                },
                {
                    tech: "Rest API",
                    link: "https://restfulapi.net/"
                },
                {
                    tech: "JWT",
                    link: "https://www.jwt.io/"
                },
                {
                    tech: "MySQL",
                    link: "https://www.mysql.com/"
                },
                {
                    tech: "Hostinger",
                    link: "https://www.hostinger.com/"
                }
            ],
            myContribution: "I led the complete frontend development of the application, implemented the dynamic form architecture, developed the real-time preview rendering system, handled API integration, and built the document conversion workflow logic. I collaborated closely with the backend team to ensure proper data handling and accurate business rule implementation while maintaining a clean and structured UI/UX.",
            impact: "The application reduced manual documentation errors, eliminated repetitive data entry across document stages, improved operational efficiency, and provided a scalable foundation for future ERP expansion.",
        },
        app2: {
            projectOverview: "This project was developed to digitize and streamline the leather raw material approval process for an international sourcing client. Previously, leather samples were shared through courier shipments or unstructured image sharing methods, which caused delays, lack of tracking, and inefficient approval workflows. The objective was to build a centralized, role-based web application to manage uploads, approvals, tracking, and task coordination in an organized and scalable manner.",
            problemStatement: "The client relied on manual processes for reviewing leather materials, including physical courier samples and informal photo sharing. There was no centralized system to track submissions, monitor approval status, or maintain structured records. This resulted in operational delays, miscommunication between teams, and difficulty managing international sourcing efficiently.",
            solution: "To address these challenges, we built a role-based Leather Gallery Management System where employees can upload leather images with structured metadata through a standardized form. Submissions are routed to the admin dashboard for review and approval. Only approved materials are published in the gallery, ensuring quality control and organized content management. The system also includes task assignment functionality and real-time notifications to improve communication and accountability.",
            workflowStructure: "The application follows a structured workflow beginning with secure login using JWT authentication. The Admin creates and manages employee accounts. Employees upload leather images along with required details, which are then marked as pending for review. The Admin reviews each submission within a centralized dashboard, where they can approve or reject entries. Approved items are automatically displayed in the public gallery, while rejected submissions remain restricted. Additionally, the Admin can assign tasks to employees, and notifications are delivered in real time using Firebase Cloud Messaging (FCM).",
            keyFeatures: [
                { point: "Role-based access control (Admin / Employee)" },
                { point: "Secure JWT-based authentication" },
                { point: "Centralized approval and rejection workflow" },
                { point: "Admin dashboard with upload statistics" },
                { point: "Date-wise filtering and submission tracking" },
                { point: "Task assignment system" },
                { point: "Real-time notifications using FCM" },
                { point: "Quality-controlled gallery display" },
            ],
            pics: [
                "/assets/project/app1/login.png",
                "/assets/project/app1/signup.png",
                "/assets/project/app1/Admin.png",
                "/assets/project/app1/task.png",
                "/assets/project/app1/upload.png",
                "/assets/project/app1/adminAction.png",
                "/assets/project/app1/approvalPanel.png",
                "/assets/project/app1/notification.png",
                "/assets/project/app1/gallery.png",
            ],
            techStack: [
                {
                    tech: "Next.js",
                    link: "https://nextjs.org/"
                },
                {
                    tech: "Nest.js",
                    link: "https://nestjs.com/"
                },
                {
                    tech: "Tailwind CSS",
                    link: "https://tailwindcss.com/"
                },
                {
                    tech: "Rest API",
                    link: "https://restfulapi.net/"
                },
                {
                    tech: "JWT",
                    link: "https://www.jwt.io/"
                },
                {
                    tech: "MySQL",
                    link: "https://www.mysql.com/"
                },
                {
                    tech: "Hostinger",
                    link: "https://www.hostinger.com/"
                },
                {
                    tech: "FCM",
                    link: "https://firebase.google.com/docs/cloud-messaging"
                }
            ],
            myContribution: "I led the complete frontend development of the application, designed and implemented the user interface using Tailwind CSS, integrated backend APIs, implemented JWT authentication and protected routing, developed the admin dashboard and approval workflow logic, handled real-time notification integration, and collaborated closely with the backend team to ensure accurate data flow and business rule implementation.",
            impact: "The system eliminated dependency on courier-based sample approvals, reduced approval turnaround time, improved communication between admin and employees, centralized leather material tracking, and established a scalable digital workflow for international raw material sourcing operations.",
        }
    };

    const project = projectsData[title];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-(--bg-primary) bg-[url('/assets/bg-noise.png')]">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-(--text-primary) tracking-wide mb-4">
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
        <div className="min-h-screen bg-(--bg-primary) py-16 px-4 md:px-8 lg:px-16">
            <div className="mx-0 md:mx-36">
                {/* Back Button */}
                <button onClick={() => router.push('/#projects')} className="mb-10 text-(--text-secondary) hover:text-[#10b981]! flex items-center gap-2 transition-colors cursor-pointer text-lg">
                    ← Back to Projects
                </button>

                <div className='mb-12'>
                    <Carousel images={project.pics} />
                </div>

                {/* Project Overview */}
                <div className="mb-12">
                    <h1 className="group text-2xl md:text-4xl font-incognito font-bold text-(--text-primary) tracking-wide mb-4 flex items-center gap-1">
                       <img src="/assets/project/icons/inspection.png" className='h-8 w-8' alt="Project Overview icon" /> PROJECT OVERVIEW <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h1>
                    <p className="text-sm md:text-[16px] text-(--text-secondary) leading-7">
                        {project.projectOverview}
                    </p>
                </div>

                {/* Problem Statement */}
                <div className="mb-12">
                    <h1 className="group text-2xl md:text-4xl font-incognito font-bold text-(--text-primary) tracking-wide mb-4 flex items-center gap-1">
                       <img src="/assets/project/icons/problem.png" className='h-8 w-8' alt="problem statement icon" /> PROBLEM STATEMENT <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h1>
                    <p className="text-sm md:text-[16px] text-(--text-secondary) leading-7">
                        {project.problemStatement}
                    </p>
                </div>

                {/* Project solution */}
                <div className="mb-12 bg-[#10b981]/10 p-4 rounded-xl">
                    <h1 className="group text-2xl md:text-4xl font-incognito font-bold text-[#10b981] tracking-wide mb-4 flex items-center gap-1">
                       <img src="/assets/project/icons/solution.png" className='h-8 w-8' alt="problem statement icon" /> SOLUTION <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h1>
                    <p className="text-sm md:text-[16px] text-[#34d399] leading-7">
                        {project.solution}
                    </p>
                </div>

                {/* workflowStructure */}
                <div className="mb-12">
                    <h1 className="group text-2xl md:text-4xl font-incognito font-bold text-(--text-primary) tracking-wide mb-4 flex items-center gap-1">
                       <img src="/assets/project/icons/workflow.png" className='h-8 w-8' alt="problem statement icon" /> WORKFLOW STRUCTURE <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h1>
                    <p className="text-sm md:text-[16px] text-(--text-secondary) leading-7">
                        {project.workflowStructure}
                    </p>
                </div>


                {/* Tech Stack */}
                <div className="mb-12">
                    <h2 className="group text-2xl md:text-4xl font-bold font-incognito text-(--text-primary) mb-6 tracking-wide flex items-center gap-1">
                       <img src="/assets/project/icons/technology.png" className='h-8 w-8' alt="problem statement icon" /> TECHNOLOGIES USED <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech: any, index: number) => (
                            <Link href={tech.link} target='_balnk' rel='noopener noreferrer' key={index} className="px-4 py-2 bg-(--project-chip-bg) border border-(--project-border) text-(--text-secondary) rounded-full text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors cursor-pointer"  >
                                <span className="text-[#10b981]">#</span>
                                <span className='text-sm md:text-[16px]'>{tech.tech}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="group text-2xl md:text-4xl font-bold font-incognito text-(--text-primary) mb-6 tracking-wide flex items-center gap-1">
                       <img src="/assets/project/icons/features.png" className='h-8 w-8' alt="problem statement icon" /> KEY FEATURES <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h2>
                    <ul className="space-y-3">
                        {project.keyFeatures.map((feature: any, index: number) => (
                            <li key={index} >
                                <span className="text-[#10b981] mt-1">✓</span>
                                <span className='text-sm pl-2 md:text-[16px]'>{feature.point}</span>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Contribution */}
                <div className="mb-12">
                    <h1 className="group text-2xl md:text-4xl font-incognito font-bold text-(--text-primary) tracking-wide mb-4 flex items-center gap-1">
                       <img src="/assets/project/icons/contribution.png" className='h-8 w-8' alt="problem statement icon" /> MY ROLES & CONTRIBUTION <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h1>
                    <p className="text-sm md:text-[16px] text-(--text-secondary) leading-7">
                        {project.myContribution}
                    </p>
                </div>


                {/* Impact */}
                <div className="mb-12">
                    <h1 className="group text-2xl md:text-4xl font-incognito font-bold text-(--text-primary) tracking-wide mb-4 flex items-center gap-1">
                       <img src="/assets/project/icons/imapct.png" className='h-8 w-8' alt="problem statement icon" /> IMPACT <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 text-4xl text-[#10b981] font-bold'>#</span>
                    </h1>
                    <p className="text-sm md:text-[16px] text-(--text-secondary) leading-7">
                        {project.impact}
                    </p>
                </div>


                <div className='flex items-center justify-center'>
                    <button onClick={() => router.push('/#projects')} className="text-md md:text-lg bg-linear-to-br from-green-600 to-emerald-600 rounded-xl text-white px-4 py-1 transition-all duration-500  cursor-pointer flex items-center gap-1">
                        Back to Projects
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetailPage;