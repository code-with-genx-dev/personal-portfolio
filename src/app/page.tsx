"use client"
//Icon imports
import { GoHome, GoProject } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { AiOutlineFilePdf } from "react-icons/ai";
import HeroSvg from "./assets/Herosvg";
import { Slide } from "./animation/Slide";
import { useDevice } from "@/components/DeviceProvider";
import Job from "@/components/Job";
import Projects from "@/components/ProjectBuild";
import Skills from "@/components/Skills";
import BuildWith from "@/components/BuidWith";
import ChatBot from "@/components/Chatbot";

export default function Home() {
  //Navbar variables.
  const navs = [
    { name: "Home", link: "#home" },
    { name: "Work", link: "#work" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    { name: "Resume", link: "/resume/Visva_Resume.pdf" }
  ];

  const footnavs = [
    { Icon: GoHome, nav: "Home", link: "#home" },
    { Icon: GoProject, nav: "Work", link: "#work" },
    { Icon: MdWorkOutline, nav: "Projects", link: "#projects" },
    { Icon: GrContact, nav: "Contact", link: "#contact" },
    { Icon: AiOutlineFilePdf, nav: "Resume", link: "/assets/resume/VisvaV.pdf" },
  ];

  //Social media links
  const socials = [
    { Icon: FaGithub, link: "https://github.com/code-with-genx-dev" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/visva-v-a1a274229/" },
    { Icon: BiLogoGmail, link: "mailto:mrvisva591@gmail.com" },
  ];

  //Device check variable.
  const { isMobile, isTablet } = useDevice();

  const techs = [
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Vercel", icon: "vercel" }
  ];

  return (
    <main className="min-h-screen bg-[#101010] font-sans dark:bg-black relative  bg-[url('/assets/bg-noise.png')]  bg-repeat  bg-size-[200px_200px]">
      {/**Navbar section*/}
      <header className="md:flex sticky top-0 justify-center pt-5 hidden z-1000">
        <nav className="flex px-12 py-3 rounded-[30px] bg-[#101010]/50 backdrop-blur-md">
          <ul className="flex gap-x-20 text-[#d6d6d6]">
            {
              navs?.map((item: any) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target={item.name === "Resume" ? "_blank" : undefined}
                    rel={item.name === "Resume" ? "noopener noreferrer" : undefined}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>

      {/* footer nav section*/}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <nav className="w-full rounded-xl bg-[#101010]/95 backdrop-blur-md py-3 px-4" aria-label="Footer navigation">
          <ul className="flex items-center justify-around max-w-md mx-auto">
            {footnavs.map(({ Icon, nav, link }, index) => (
              <li key={index}>
                <a
                  href={link}
                  target={nav === "Resume" ? "_blank" : undefined}
                  rel={nav === "Resume" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors"
                >
                  <Icon size={20} className="text-[#d6d6d6]" />
                  <p className="text-[#d6d6d6] text-[11px] font-medium">{nav}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* chatbot section*/}
      <ChatBot />

      {/* Main section*/}
      <section id="home" className="text-white pt-6 md:pt-20 mx-5 md:mx-16">
        <div className="flex xl:flex-row flex-col xl:items-center items-center xl:justify-center justify-between gap-y-12 md:gap-y-0 md:gap-x-12">
          <Slide delay={0.14}>
            <div>
              <p className="font-incognito font-semibold tracking-normal text-3xl sm:text-5xl leading-12">
                Frontend engineer, component architect & design systems specialist
              </p>
              <br />
              <p className="text-[14px] text-[#e5e7eb]">I'm Visva, a frontend developer with 1+ year of experience building scalable projects from client requirements. Passionate about clean code, modern web technologies, and creating elegant solutions for users.</p>
            </div>
            <div className="flex items-center gap-4 pt-8">
              {socials.map(({ Icon, link }: any, index: any) => (
                <a key={index}
                  href={link}
                  target="_blank"
                  className="h-12 w-12 rounded-xl border border-[#30303098] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[white]/20 transition duration-300 ease-in-out"
                >
                  <Icon size={24} className="text-[#e5e7eb]" />
                </a>
              ))}
            </div>
          </Slide>
          <Slide delay={0.14} direction="down">
            <HeroSvg />
          </Slide>
        </div>
        <div className="py-10">
          <Skills />
        </div>
      </section>
      {/* About section*/}
      {/* <section className="text-amber-50 mx-5 md:mx-16 py-20">
        <div>
          <Slide delay={0.14} direction="down">
            <div>

            </div>
            <div className="">
              <h1 className="font-incognito text-4xl mb-4">ABOUT</h1>
              <p className="mt-3">I’m a frontend developer with over one year of hands-on experience building responsive, high-performance web applications. I specialize in React, Next.js, Tailwind CSS, and modern UI animations, with a strong focus on clean code and user-centric design. I enjoy turning complex ideas into elegant, scalable interfaces and continuously improving my skills by exploring new frontend technologies.</p>
            </div>
          </Slide>
        </div>
      </section> */}
      {/* Work section*/}
      <section id="work" className="text-amber-50 mx-5 md:mx-16 pt-10 pb-30">
        <div>
          <Slide delay={0.14} direction="down">
            <>
              <h1 className="font-incognito text-4xl mb-14">WORK EXPERIENCE</h1>
              <div className="md:pl-14">
                <Job deviceType={{ mob: isMobile, tab: isTablet }} />
              </div>
            </>
          </Slide>
        </div>
      </section>

      {/* Projects section*/}
      <section id="projects" className="text-amber-50 mx-5 md:mx-16 pb-30">
        <div>
          <Slide delay={0.14} direction="down">
            <>
              <h1 className="font-incognito text-4xl mb-14">Projects</h1>
              <div className="">
                <Projects />
              </div>
            </>
          </Slide>
        </div>
      </section>

      {/* contact section*/}
      <section id="contact" className="text-amber-50 mx-5 md:mx-16 pb-32">
        <div className="flex items-center justify-center">
          <Slide delay={0.14} direction="down" className="flex flex-col gap-3">
            <h1 className="font-incognito text-4xl mb-5 text-center">Lets Connects</h1>
            <div className="text-center">Interested in discussing a project, collaboration, or just want to chat? Book a meeting with me and let's talk!</div>
            <div className="flex items-center justify-center">
              <a href="mailto:mrvisva591@gmail.com" className='flex items-center gap-x-2 cursor-pointer px-4 py-2 border border-[#30303098] text-white rounded-md text-sm font-medium hover:border-zinc-600 hover:bg-[#27272b66] transition-colors duration-200'>
                <BiLogoGmail size={20} />
                <p>Mail me!</p>
              </a>
            </div>
          </Slide>
        </div>
      </section>

      <footer className="text-amber-50 mx-5 md:mx-16 ">
        <hr className="border border-[#30303098] mb-8" />
        <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-y-10 items-center pb-34 md:px-5">
          <BuildWith technologies={techs} />
          <p className="text-[8px] md:[12px] text-zinc-300">Copyright © Visva V 2025 All rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
