import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="inline-block opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="inline-block text-primary ml-4 opacity-0 animate-fade-in-delay-1"> Dmitry</span>
                        <span className="inline-block text-gradient ml-4 opacity-0 animate-fade-in-delay-2"> Nazarov</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl-mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a student at TAMK focusing on backend and full stack development.
                        Right now I'm building small projects in JavaScript + React, and Java for backend.
                        My goal is to grow into a junior backend or full stack developer.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className="h-7.5 w-7.5 text-primary" />
            </div>
        </section>
    )
}