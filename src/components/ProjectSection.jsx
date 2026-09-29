import { useRef, useState } from "react";
import { Github, ArrowRight, ArrowLeft } from "lucide-react"

const featuredProjects = [
    {
        title: "Relay",
        status: "In development",
        description: "A cross-platform mobile app designed to create, schedule, and publish content across social platforms from one place. Inspired by my wife's content workflow, I'm building Relay with React Native and TypeScript, including the UI/UX and social platform integrations.",
        image: "/portfolio/projects/relay.png",
        technologies: ["React Native", "TypeScript", "UI/UX Design"],
        features: [],
    },
    {
    title: "Echo text-based blog app",
    description:
        "A full-stack social platform where users can register, log in, publish posts and interact with other users.",
    image: "/portfolio/projects/echo.png",
    technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Passport.js",
        "BCrypt",
        "React"
    ],
    features: [
        "User Authentication",
        "REST API",
        "CRUD Operations",
        "Responsive Design",
        "PostgreSQL Database",
    ],
    githubUrl: "https://github.com/dmitry-nazarov22/echo-fullstack-blog",
    demoUrl: "https://echo-fullstack-blog-app.onrender.com",
}];

const projects = [
    {
        id: 1,
        title: "LIFT - mobile game",
        description: "A team-developed mobile game built in Godot where players operate a moffet in an automated warehouse before the battery runs out.",
        contribution: "Co-developed the game as part of a two-person programming team, primarily through pair programming. Took primary responsibility for driving mechanics, headlights, and sound design.",
        image: "/portfolio/projects/lift-project.png",
        tags: ["C#", "Team", "Android", "Godot"],
        githubUrl: "https://github.com/TeamGGames/L-I-F-T",
        webUrl: "https://webpages.tuni.fi/24tiko2g/"
    },

    {
        id: 2,
        title: "Java Contact Manager",
        description: "A Java contacts manager featuring CRUD operations, custom data structures, layered architecture, and both CLI and JavaFX interfaces.",
        image: "/portfolio/projects/contact-project.png",
        tags: ["Java", "JavaFX", "OOP", "CRUD"],
        githubUrl: "https://github.com/dmitry-nazarov22/oo-project",
    },

    {
        id: 3,
        title: "TUNNEL",
        description: "A data-driven text adventure built in Python with branching story paths.",
        image: "/portfolio/projects/tunnel-project.png",
        tags: ["Python", "CLI", "JSON"],
        githubUrl: "https://github.com/dmitry-nazarov22/tunnel-text-adventure-py",
    },

    {
        id: 4,
        title: "Weather App",
        description: "A responsive weather application powered by the OpenWeather API.",
        image: "/portfolio/projects/weather-project.png",
        tags: ["React", "JavaScript", "API"],
        githubUrl: "https://github.com/dmitry-nazarov22/react-weather-app",
        demoUrl: "https://dmitry-nazarov22.github.io/react-weather-app/"

    },
]

export const ProjectSection = () => {
    const carouselRef = useRef(null);
    const [activeProject, setActiveProject] = useState(0);

    const goToProject = (index) => {
        const carousel = carouselRef.current;
        const slide = carousel.children[index];
        carousel.scrollTo({
            left: slide.offsetLeft - carousel.offsetLeft,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
    };

    const updateActiveProject = () => {
        const carousel = carouselRef.current;
        let closestIndex = 0;
        let closestDistance = Infinity;
        Array.from(carousel.children).forEach((slide, index) => {
            const distance = Math.abs(slide.offsetLeft - carousel.offsetLeft - carousel.scrollLeft);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        setActiveProject(closestIndex);
    };
    return <section id="projects" className="py-24 px-4 relative">
        <section className="mb-28 max-w-5xl mx-auto" aria-label="Featured projects" aria-roledescription="carousel">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Projects</span>
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-primary">Featured</span>
            </h2>
            <div
                id="featured-project-carousel"
                ref={carouselRef}
                onScroll={updateActiveProject}
                tabIndex={0}
                aria-label="Featured project cards. Use left and right arrow keys to navigate."
                onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                        event.preventDefault();
                        goToProject((activeProject + (event.key === "ArrowRight" ? 1 : -1) + featuredProjects.length) % featuredProjects.length);
                    }
                }}
                className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
            >
                {featuredProjects.map((project, index) => (
                    <article key={project.title} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${featuredProjects.length}: ${project.title}`} className="w-full shrink-0 snap-start rounded-2xl border border-primary/20 bg-card overflow-hidden shadow-lg">
                        <div className="grid md:grid-cols-2 h-full">
                            <div className="flex items-center justify-center bg-black/10 p-6">
                                <img
                                    src={project.image}
                                    alt={project.status ? "Relay app interface for composing and sharing social media posts" : project.title}
                                    className={project.status ? "w-auto max-w-full h-[320px] md:h-[480px] object-contain rounded-3xl" : "w-full h-[260px] md:h-[480px] object-contain"}
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6 sm:p-10 flex flex-col justify-center">
                                <p className="text-primary font-semibold mb-3">
                                    {project.status ? "Current Project" : "Featured Project"}
                                </p>
                                <h3 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h3>
                                {project.status && (
                                    <span className="self-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-5">
                                        {project.status}
                                    </span>
                                )}
                                <p className="text-muted-foreground mb-8">{project.description}</p>
                                {project.features.length > 0 && (
                                    <div className="grid grid-cols-2 gap-3 mb-8">
                                        {project.features.map(feature => (
                                            <div key={feature} className="flex items-center gap-2">
                                                <div className="w-2 h-2 shrink-0 rounded-full bg-primary" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="flex flex-wrap justify-center gap-3">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="rounded-full bg-primary/10 border border-primary/20 px-3 py-2 text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {(project.demoUrl || project.githubUrl) && (
                                    <div className="flex flex-wrap gap-4 mt-8">
                                        {project.demoUrl && <a href={project.demoUrl} className="cosmic-button">Live Demo</a>}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} className="px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition">GitHub</a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="flex items-center justify-center gap-5 mt-6">
                <button type="button" onClick={() => goToProject((activeProject - 1 + featuredProjects.length) % featuredProjects.length)} aria-label="Previous featured project" aria-controls="featured-project-carousel" className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex gap-2">
                    {featuredProjects.map((project, index) => (
                        <button key={project.title} type="button" onClick={() => goToProject(index)} aria-label={`Show ${project.title}`} aria-current={activeProject === index ? "true" : undefined} aria-controls="featured-project-carousel" className="p-3 rounded-full focus-visible:outline-2 focus-visible:outline-primary">
                            <span className={`block h-2 rounded-full transition-all motion-reduce:transition-none ${activeProject === index ? "w-6 bg-primary" : "w-2 bg-primary/30"}`} />
                        </button>
                    ))}
                </div>
                <button type="button" onClick={() => goToProject((activeProject + 1) % featuredProjects.length)} aria-label="Next featured project" aria-controls="featured-project-carousel" className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary">
                    <ArrowRight size={20} />
                </button>
            </div>
            <p className="sr-only" aria-live="polite" aria-atomic="true">{featuredProjects[activeProject].title}, {activeProject + 1} of {featuredProjects.length}</p>

        </section>
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <span className="text-primary"> Others: </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="
                                group
                                overflow-hidden
                                rounded-xl
                                border
                                border-primary/10
                                bg-card
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:border-primary/40
                                hover:shadow-xl
                            "
                    >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                                    h-44
                                    w-full
                                    object-cover
                                "
                            />

                            <div className="p-5">

                                <h3 className="text-lg font-semibold mb-4">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-8 text-xs">{project.description}</p>

                                {project.contribution && (
                                    <div className="mb-6 text-left">
                                        <h4 className="text-sm font-semibold mb-2">My Contribution</h4>
                                        <p className="text-sm text-muted-foreground">{project.contribution}</p>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="
                                                rounded-full
                                                bg-primary/10
                                                px-3
                                                py-1
                                                text-xs
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between">

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="flex items-center gap-2 hover:text-primary"
                                    >
                                        <Github size={18}/>
                                        GitHub
                                    </a>

                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="flex items-center gap-1 hover:text-primary"
                                        >
                                            Live
                                            <ArrowRight size={16}/>
                                        </a>
                                    )}

                                </div>

                            </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/dmitry-nazarov22"
                >
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
};
