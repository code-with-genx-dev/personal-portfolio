import MoonIcon from "@/app/assets/MoonIcon";
import SunIcon from "@/app/assets/SunIcon";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    // if (!mounted) {
    //     return (
    //         <button className="h-10 w-10 rounded-lg border border-[#30303098] flex items-center justify-center">
    //             <div className="w-5 h-5" />
    //         </button>
    //     );
    // }

    return (
        <button
            onClick={toggleTheme}
            className={`flex cursor-pointer items-center justify-center transition duration-300 ease-in-out text-[#e5e7eb] ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}