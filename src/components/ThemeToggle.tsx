import MoonIcon from "@/app/assets/MoonIcon";
import SunIcon from "@/app/assets/SunIcon";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
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