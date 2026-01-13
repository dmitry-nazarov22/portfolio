import { Code, User, Briefcase } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">IT student</h3>

                    <p className="text-muted-foreground">
                        Studying at TAMK, Finland with a strong focus on full stack development.
                    </p>

                    <p className="text-muted-foreground">
                        I enjoy building clean, minimalistic applications and constantly improving my technical skills.
                        My free time I spend coding, developing personal projects, going to the gym and reading.
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
                            <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                <p className="text-muted-foreground">Courses shift focus now from web development to complete full-stack.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">Clean and intuitive interfaces focused on usability and simplicity.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Experience</h4>
                                <p className="text-muted-foreground">Worked on multiple academic and personal projects: from a mobile game built with agile methodologies to full web and UI/UX projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}