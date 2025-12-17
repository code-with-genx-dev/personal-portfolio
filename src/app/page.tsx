"use client"
//Icon imports
import { GoHome, GoProject } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { AiOutlineFilePdf } from "react-icons/ai";

export default function Home() {
  //Navbar variables
  const navs = ["Home", "Work", "Projects", "Contact", "Resume"]
  const footnavs = [
    { Icon: GoHome, nav: "Home", link: "#" },
    { Icon: GoProject, nav: "Work", link: "#" },
    { Icon: MdWorkOutline, nav: "Projects", link: "#" },
    { Icon: GrContact, nav: "Contact", link: "#" },
    { Icon: AiOutlineFilePdf, nav: "Resume", link: "#" },
  ];
  return (
    <div className="min-h-screen bg-[#101010] font-sans dark:bg-black relative">
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

      <section className="min-h-screen text-amber-50 ">
        JDIOJI Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam nobis quidem corporis harum, ullam sit? Praesentium ut est iure aspernatur eum quae nesciunt modi, corrupti sed reprehenderit autem quidem adipisci eveniet, doloremque amet, aperiam ducimus in suscipit quasi? Quibusdam ipsa quidem fugiat architecto quia, magnam suscipit tenetur debitis fugit.
      </section>
      <section className="min-h-screen text-amber-50 ">
        JDIOJI
      </section>
    </div>
  );
}
