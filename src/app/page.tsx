"use client"
//Icon imports
import { GoHome, GoProject } from "react-icons/go";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { AiOutlineFilePdf } from "react-icons/ai";
import HeroSvg from "./assets/Herosvg";
import { Slide } from "./animation/Slide";
import { useDevice } from "@/components/DeviceProvider";

export default function Home() {
  //Navbar variables.
  const navs = ["Home", "Work", "Projects", "Contact", "Resume"]
  const footnavs = [
    { Icon: GoHome, nav: "Home", link: "#" },
    { Icon: GoProject, nav: "Work", link: "#" },
    { Icon: MdWorkOutline, nav: "Projects", link: "#" },
    { Icon: GrContact, nav: "Contact", link: "#" },
    { Icon: AiOutlineFilePdf, nav: "Resume", link: "#" },
  ];

  const socials = [
    { Icon: FaGithub, link: "#" },
    { Icon: FaLinkedin, link: "#" },
    { Icon: BiLogoGmail, link: "#" },
  ];

  //Device check variable.
  const { isMobile, isTablet } = useDevice();

  console.log(isMobile, "Mob");
  console.log(isTablet, "isTablet")

  return (
    <div className="min-h-screen bg-[#101010] font-sans dark:bg-black relative  bg-[url('/assets/bg-noise.png')]  bg-repeat  bg-size-[200px_200px]">
      {/**Navbar section*/}
      <header className="md:flex sticky top-0 justify-center pt-5 hidden">
        <nav className="border flex px-12 py-3 rounded-[30px] bg-[#101010]/30 backdrop-blur-md">
          <ul className="flex gap-x-20 text-[#d6d6d6]">
            {
              navs?.map((item: any) => (
                <li key={item} className="cursor-pointer">{item}</li>
              ))
            }
          </ul>
        </nav>
      </header>

      {/* footer nav section*/}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <nav className="w-full border rounded-xl bg-[#101010]/95 backdrop-blur-md py-3 px-4" aria-label="Footer navigation">
          <ul className="flex items-center justify-around max-w-md mx-auto">
            {footnavs.map(({ Icon, nav, link }, index) => (
              <li key={index} className="flex flex-col items-center gap-1 cursor-pointer hover:text-white transition-colors">
                <Icon size={20} className="text-[#d6d6d6]" />
                <p className="text-[#d6d6d6] text-[11px] font-medium">{nav}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main section*/}
      <section className="text-amber-50 pt-4 md:pt-24">
        <div className="flex xl:flex-row flex-col items-center xl:justify-center gap-20 px-7.5">
          <Slide delay={0.14} direction="left">
            <div className="flex flex-col gap-1">
              <div className={`md:text-[75px] text-[40px] md:-space-y-5 ${isTablet && "text-[65px]"} font-light`}>
                <p className="flex items-center gap-2 text-[#5f5f5f]">Hi <img src="/assets/hero-ui.png" alt="" className={`${isMobile ? "h-8.75 w-15" : isTablet ? "h-12.5 w-21.25" : "h-17  w-30"}`} /> I'm <span className="text-[white]">Visva</span></p>
                <p>Frontend Developer</p>
              </div>
              <div>
                <p>Frontend Developer with 1+ year of experience building responsive, high-performance web interfaces using modern JavaScript frameworks.</p>
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
            </div>
          </Slide>
          <Slide delay={0.14} direction="down">
            <HeroSvg />
          </Slide>
        </div>
      </section>

      <section className=" text-amber-50 mt-30">
        <Slide delay={0.14} direction="down">
          <div className="px-7.5">
            <h1 className="text-4xl font-bold">ABOUT</h1>
            <p className="mt-3">I’m a frontend developer with over one year of hands-on experience building responsive, high-performance web applications. I specialize in React, Next.js, Tailwind CSS, and modern UI animations, with a strong focus on clean code and user-centric design. I enjoy turning complex ideas into elegant, scalable interfaces and continuously improving my skills by exploring new frontend technologies.</p>
          </div>
        </Slide>

      </section>
      <section className="min-h-screen text-amber-50 mt-30">
        

      </section>
    </div>
  );
}
