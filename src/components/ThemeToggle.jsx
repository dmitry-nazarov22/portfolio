import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
            if (storedTheme === "dark") {
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
            } else {
                localStorage.setItem("theme", "light");
            }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} className={cn(
            "max-sm:hidden p-2 rounded-full transition-colors duration-300",
            "inline-flex items-center justify-center",
            "focus:outline-hidden"

        )}>

            {isDarkMode ? (
                <Sun className="h-6 w-6 text-white-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />)}
    </button>
    )
}