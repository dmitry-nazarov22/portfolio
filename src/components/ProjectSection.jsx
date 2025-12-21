import { Github, ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Weather App",
        description: "A minimalistic and dynamic weather forecast app built with React + Vite.",
        image: "/projects/weather-project.png",
        tags: ["React", "JavaScript", "API"],
        githubUrl: "https://github.com/dmitry-nazarov22/react-weather-app"

    },

    {
        id: 2,
        title: "Clean To-Do App",
        description: "A simple, modern, and persistent to-do list app built with React and Material UI. Your tasks automatically save in localStorage.",
        image: "/projects/todo-project.png",
        tags: ["React", "MaterialUI", "JavaScript"],
        githubUrl: "https://github.com/dmitry-nazarov22/react-clean-todo-app"
    },

    {
        id: 3,
        title: "TUNNEL - cli text adventure",
        description: "An atmospheric, data-driven text-adventure built in Python.",
        image: "/projects/tunnel-project.png",
        tags: ["Python"],
        githubUrl: "https://github.com/dmitry-nazarov22/react-clean-todo-app"
    },
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 reltive">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 mac-w-2xl mx-auto">
                Here are some of my recent projects while I'm still gaining experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div>
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