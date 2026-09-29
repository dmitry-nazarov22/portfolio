import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => document.documentElement.classList.contains("dark"))

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        try {
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        } catch {
            // Theme switching still works when browser storage is unavailable.
        }
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(current => !current);
    }

    return (
        <button aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"} onClick={toggleTheme} className={cn(
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