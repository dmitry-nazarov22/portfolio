import { Github, ArrowRight } from "lucide-react"

const featuredProject = {
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
};

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
    return <section id="projects" className="py-24 px-4 relative">
        <section className="mb-28">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My <span className="text-primary">Projects</span>
            </h2>
            <div className="
                rounded-2xl
                border
                border-primary/20
                bg-card
                overflow-hidden
                shadow-lg
            ">
                <div className="grid lg:grid-cols-2">
                    <div className=" relative overflow-hidden">
                        <img
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            className="
                                w-full
                                h-full
                                object-cover
                                transition-transform
                                duration-500
                                hover:scale-102
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/5
                                via-transparent
                                to-transparent
                            "
                        />
                    </div>
                    <div className="p-10 flex flex-col justify-center">

                        <p className="text-primary font-semibold mb-2">

                            ★ Featured Project

                        </p>

                        <h3 className="text-4xl font-bold mb-4">

                            {featuredProject.title}

                        </h3>

                        <p className="text-muted-foreground mb-8">

                            {featuredProject.description}

                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-8">

                            {featuredProject.features.map(feature => (

                                <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                >

                                    <div className="w-2 h-2 rounded-full bg-primary"/>

                                    {feature}

                                </div>

                            ))}

                        </div>
                        <div className="flex flex-wrap gap-3 mb-8">

                            {featuredProject.technologies.map((tech) => (

                                <span

                                    key={tech}

                                    className="
                                        rounded-full
                                        bg-primary/10
                                        border
                                        border-primary/20
                                        px-3
                                        py-2
                                        text-sm
                                    "

                                >
                                    {tech}
                                </span>

                            ))}

                        </div>
                        <div className="flex gap-4">
                            <a
                                href={featuredProject.demoUrl}
                                className="cosmic-button"
                            >
                                Live Demo
                            </a>

                            <a
                                href={featuredProject.githubUrl}
                                className="
                                    px-6
                                    py-2
                                    rounded-full
                                    border
                                    border-primary
                                    hover:bg-primary/10
                                    transition
                                "

                            >
                                GitHub
                            </a>

                        </div>
                    </div>
                </div>

            </div>

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
