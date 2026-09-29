import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectSection"
import { ContactSection } from "../components/ContactsSection"
import { Footer } from "../components/Footer"
import { EducationSection } from "../components/EducationSection"
import { CursorTrail } from "../components/CursorTrail"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <CursorTrail />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <SkillsSection />
            <EducationSection />
            <ContactSection />
            </main>
            {/* Footer */}
            <Footer/>
        </div>
    )
}
