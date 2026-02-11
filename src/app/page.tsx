"use client"
//Icon imports
import { GoFileDirectory, GoHome, GoProject } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineFilePdf } from "react-icons/ai";
import HeroSvg from "./assets/Herosvg";
import { Slide } from "./animation/Slide";
import { useDevice } from "@/components/DeviceProvider";
import Job from "@/components/Job";
import Projects from "@/components/ProjectBuild";
import Skills from "@/components/Skills";
import BuildWith from "@/components/BuidWith";
import ChatBot from "@/components/Chatbot";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import { MdOutlineContactMail } from "react-icons/md";
import AboutCards from "@/components/About";
import ProjectBuild from "@/components/ProjectBuild";

export default function Home() {
  //Navbar variables.
  const navs = [
    { name: "Home", link: "#home" },
    { name: "Work", link: "#work" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    { name: "Resume", link: "https://drive.google.com/file/d/1LopJaTaKwTFeTMUwwizOXsczeGcem6vW/view?usp=sharing" }
  ];

  const footnavs = [
    { Icon: GoHome, nav: "Home", link: "#home" },
    { Icon: GoProject, nav: "Work", link: "#work" },
    { Icon: GoFileDirectory, nav: "Projects", link: "#projects" },
    { Icon: MdOutlineContactMail, nav: "Contact", link: "#contact" },
    { Icon: AiOutlineFilePdf, nav: "Resume", link: "https://drive.google.com/file/d/1LopJaTaKwTFeTMUwwizOXsczeGcem6vW/view?usp=sharing" },
  ];

  //Social media links
  const socials = [
    { Icon: FaGithub, link: "https://github.com/code-with-genx-dev" },
    { Icon: FaLinkedin, link: "https://www.linkedin.com/in/visva-v-a1a274229/" },
    { Icon: BiLogoGmail, link: "mailto:mrvisva591@gmail.com" },
  ];

  //Device check variable.
  const { isTablet, isDesktop } = useDevice();

  const [activeSection, setActiveSection] = useState("home");

  const techs = [
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Vercel", icon: "vercel" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    ["home", "work", "projects", "contact"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[bg-primary] font-sans dark:bg-[bg-primary] relative  bg-[url('/assets/bg-noise.png')]  bg-repeat  bg-size-[200px_200px]">

      {/**Navbar section*/}
      <header className="md:flex sticky top-0 justify-center pt-5 hidden z-1000">
        <nav className="flex px-12 py-3 rounded-[30px] bg-[primary-blur] dark:bg-[primary-blur] backdrop-blur-md">
          <ul className="flex gap-x-20 text-[text-muted] dark:text-[text-muted] ">
            {
              navs?.map((item: any) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target={item.name === "Resume" ? "_blank" : undefined}
                    rel={item.name === "Resume" ? "noopener noreferrer" : undefined}
                    className={`cursor-pointer dark:hover:text-[text-primary] hover:text-[text-primary] font-semibold text-[14px] transition-colors ${activeSection === item.link.replace('#', '') ? 'text-[#10b981]' : 'hover:text-[text-primary]'}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </header>
      <div className="fixed right-5 md:top-8 top-2 z-1001">
        <ThemeToggle />
      </div>

      {/* footer nav section*/}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <nav className="w-full rounded-xl bg-(--bg-secondary-blur) backdrop-blur-md py-3 px-4" aria-label="Footer navigation">
          <ul className="flex items-center justify-around max-w-md mx-auto">
            {footnavs.map(({ Icon, nav, link }, index) => (
              <li key={index}>
                <a
                  href={link}
                  target={nav === "Resume" ? "_blank" : undefined}
                  rel={nav === "Resume" ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center gap-1 cursor-pointer dark:hover:text-[text-primary] hover:text-[text-primary] transition-colors"
                >
                  <Icon size={20} className="text-[text-muted] dark:text-[text-muted]" />
                  <p className="text-[text-muted] dark:text-[text-muted] text-[11px] font-medium">{nav}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* chatbot section*/}
      <ChatBot />

      {/* Main section*/}
      <section id="home" className="text-(--text-primary) pt-6 md:pt-20 mx-5 md:mx-16">
        <div className="flex xl:flex-row flex-col xl:items-center items-center xl:justify-center justify-between gap-y-12 md:gap-y-0 md:gap-x-12">
          <Slide delay={0.14}>
            <div>
              <p className="font-incognito font-semibold  text-3xl sm:text-5xl leading-12">
                Frontend engineer, component architect & design systems specialist
              </p>
              <br />
              <p className="md:text-[16px] text-[14px] md:w-[90%] text-(--text-secondary)">I'm <span className="text-[#10b981]">Visva V</span>, a frontend developer with 1+ year experience in React.js and Next.js, building scalable, user-focused, modern, production-ready web applications.</p>
            </div>
            <Slide delay={0.14} direction="left" className="flex items-center gap-4 pt-8">
              {socials.map(({ Icon, link }: any, index: any) => (
                <a key={index}
                  href={link}
                  target="_blank"
                  className="h-12 w-12 rounded-xl border border-[#30303098] flex items-center justify-center cursor-pointer dark:hover:text-[text-primary] hover:text-[text-primary] hover:bg-[black]/20 dark:hover:bg-[white]/20 transition duration-300 ease-in-out"
                >
                  <Icon size={24} className="text-(--text-secondary)" />
                </a>
              ))}
            </Slide>
          </Slide>
          <Slide delay={0.14} direction="down">
            <HeroSvg />
          </Slide>
        </div>
        <div className="py-14">
          <Skills />
        </div>
      </section>

      <section id="about" className="text-(--text-primary) mx-5 md:mx-16 pt-20 pb-26">
        <div>
          <Slide delay={0.14} direction="down" className="flex flex-col items-center">
              <h1 className="font-incognito text-4xl text-center mb-4 text-(--text-primary)">ABOUT ME!</h1>
              <AboutCards />
          </Slide>
        </div>

      </section>

      {/* Work section*/}
      <section id="work" className="text-(--text-primary) mx-5 md:mx-16 pt-10 pb-24">
        <div>
          <Slide delay={0.14} direction="down">
              <h1 className="font-incognito text-4xl mb-14 text-(--text-primary)">WORK EXPERIENCE</h1>
              <Job />
          </Slide>
        </div>
      </section>

      {/* Projects section*/}
      <section id="projects" className="text-(--text-primary) mx-5 md:mx-16 pb-30">
        <div>
          <Slide delay={0.14} direction="down">
            <h1 className="font-incognito text-4xl mb-14 text-(--text-primary)">Projects</h1>
            <div className="mx-auto ">
              {/* <Projects /> */}
              <ProjectBuild/>
            </div>
          </Slide>
        </div>
      </section>

      {/* contact section*/}
      <section id="contact" className="text-(--text-primary) mx-5 md:mx-16 pt-10 pb-32">
        <div className="flex items-center justify-center">
          <Slide delay={0.14} direction="down" className="flex flex-col gap-3">
            <h1 className="font-incognito text-4xl mb-5 text-center text-(--text-primary)">Lets Connects</h1>
            <div className="text-center text-[16px] text-(--text-secondary)">Interested in projects, career advice, job opportunities, or portfolio feedback? Book a call and let’s talk!</div>
            <div className="flex items-center justify-center">
              <a href="mailto:mrvisva591@gmail.com"
                onClick={(e) => { if (isDesktop || isTablet) { e.preventDefault(); window.open("https://mail.google.com/mail/?view=cm&fs=1&to=mrvisva591@gmail.com", "_blank") } }}
                className='flex items-center gap-x-2 cursor-pointer px-4 py-2 border rounded-md text-sm font-medium border-(--btn-outline-border) text-(--btn-outline-text) hover:bg-(--btn-outline-hover-bg) hover:border-(--btn-outline-hover-border) transition-colors duration-200'>
                <BiLogoGmail size={20} />
                <p>Mail me!</p>
              </a>
            </div>
          </Slide>
        </div>
      </section>

      {/* Footer section */}
      <footer className="text-(text-primary) mx-5 md:mx-16 ">
        <hr className="border border-(--btn-outline-border) font-extralight mb-8" />
        <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-y-10 items-center pb-34 md:px-5">
          <BuildWith technologies={techs} />
          <p className="text-[8px] md:[12px] text-(--text-secondary)">Copyright © Visva V 2025 All rights Reserved</p>
        </div>
      </footer>
    </main>
  );
}
