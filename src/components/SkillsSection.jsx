import {
    FaJava,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
    FaPython,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTypescript,
    SiDotnet,
    SiSpringboot,
    SiExpress,
    SiMui,
    SiPostgresql,
    SiMysql,
    SiJunit5,
    SiJest,
    SiPassport,
    SiKotlin,
    SiSwift,
} from "react-icons/si";

import { Monitor, Server, Smartphone, Database, Wrench, Lock } from "lucide-react";


const techCategories = [
  {
    title: "Backend",
    icon: Server,
    technologies: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "C#", icon: SiDotnet },
      { name: ".NET", icon: SiDotnet },
    ],
  },

  {
    title: "Frontend",
    icon: Monitor,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Material UI", icon: SiMui },
      { name: "JavaFX", icon: FaJava },
    ],
  },

  {
    title: "Mobile Development",
    icon: Smartphone,
    technologies: [
      { name: "React Native", icon: FaReact },
      { name: "Kotlin", icon: SiKotlin },
      { name: "Swift", icon: SiSwift },
    ],
  },

  {
    title: "Databases & Security",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Passport.js", icon: SiPassport },
      { name: "bcrypt", icon: Lock },
    ],
  },

  {
    title: "Tools & Testing",
    icon: Wrench,
    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "JUnit", icon: SiJunit5 },
      { name: "Jest", icon: SiJest },
      { name: "Supertest", icon: Wrench },
    ],
  },
];

export const SkillsSection = () => {
    return <section
        id="skills"
        className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Tech <span className="text-primary">Stack</span>
            </h2>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                {techCategories.map((category) => {
                    const CategoryIcon = category.icon;

                    return (
                        <div
                            key={category.title}
                            className="group rounded-xl border border-primary/10 bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <CategoryIcon className="w-6 h-6 text-primary" />

                                <h3 className="text-xl font-semibold">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {category.technologies.map((tech) => {
                                    const Icon = tech.icon;

                                    return (
                                        <div
                                            key={tech.name}
                                            className="rounded-lg border border-border bg-background/50 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:scale-105"
                                        >
                                            <Icon
                                                size={24}
                                                className="mx-auto mb-3 text-primary"
                                            />

                                            <p className="text-sm font-medium text-center">
                                                {tech.name}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    </section>
}
