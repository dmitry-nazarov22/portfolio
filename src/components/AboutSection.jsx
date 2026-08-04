import {
    MapPin,
    Briefcase,
    Languages,
} from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Hi, I'm Dmitry Nazarov</h3>

                    <p className="text-muted-foreground">
                        I'm an IT student at Tampere University of Applied Sciences with a passion for building modern full-stack applications.
                    </p>

                    <p className="text-muted-foreground">
                        During my studies I've worked with React, Java, Spring Boot, Node.js and PostgreSQL while developing academic and personal projects.
                    </p>
                    <p>
                        I'm currently looking for my first internship or junior developer position where I can continue learning while contributing to real software.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>

                        <a href="/portfolio/documents/CV-NAZAROV-DMITRY.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Based in</h4>
                                <p className="text-muted-foreground">Tampere, Finland.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Technologies</h4>
                                <p className="text-muted-foreground">20+ languages, frameworks and tools</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Languages className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Languages</h4>
                                <p className="text-muted-foreground">🇫🇮 Finnish | 🇬🇧 English | 🇷🇺 Russian</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}