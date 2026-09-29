import {
    GraduationCap,
    Calendar,
    BookOpen,
    Award,
    Laptop,
    Rocket,
    CheckCircle2,
} from "lucide-react";

export const EducationSection = () => {
    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="text-primary">Education</span>
                </h2>

                {/* Main Card */}
                <div
                    className="
                        rounded-2xl
                        border
                        border-primary/10
                        bg-card
                        p-8
                        transition-all
                        duration-300
                        hover:border-primary/30
                        hover:shadow-xl
                    "
                >

                    <div className="flex items-start gap-6">

                        <div className="p-4 rounded-xl bg-primary/10">
                            <GraduationCap className="w-8 h-8 text-primary" />
                        </div>

                        <div className="flex-1">

                            <h3 className="text-2xl font-semibold">
                                Tampere University of Applied Sciences
                            </h3>

                            <p className="text-primary mt-1">
                                Bachelor of Business Administration — Information Technology
                            </p>

                            <div className="flex items-center gap-2 text-muted-foreground mt-3">
                                <Calendar size={18} />
                                <span>2024 — Present</span>
                            </div>

                            <p className="text-muted-foreground mt-6">
                                Final-year IT student specializing in full-stack and
                                mobile application development. Through coursework and
                                personal projects I've built REST APIs, full-stack web
                                applications, object-oriented Java software and collaborative
                                team projects.
                            </p>

                        </div>

                    </div>

                    {/* Quick Facts */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

                        <div className="rounded-xl bg-secondary/40 p-5 text-center">
                            <Award className="mx-auto mb-3 text-primary" />
                            <h4 className="font-semibold">Final Year</h4>
                            <p className="text-sm text-muted-foreground">
                                Graduating in 2027
                            </p>
                        </div>

                        <div className="rounded-xl bg-secondary/40 p-5 text-center">
                            <BookOpen className="mx-auto mb-3 text-primary" />
                            <h4 className="font-semibold">Core Courses</h4>
                            <p className="text-sm text-muted-foreground">
                                Full Stack, OOP, Databases & Testing
                            </p>
                        </div>

                        <div className="rounded-xl bg-secondary/40 p-5 text-center">
                            <Rocket className="mx-auto mb-3 text-primary" />
                            <h4 className="font-semibold">Current Focus</h4>
                            <p className="text-sm text-muted-foreground">
                                Mobile & Software Engineering
                            </p>
                        </div>

                    </div>

                    {/* Coursework */}

                    <div className="grid md:grid-cols-2 gap-6 mt-10">

                        <div className="rounded-xl border border-primary/10 p-6">

                            <h4 className="font-semibold text-lg mb-4">
                                Completed Coursework
                            </h4>

                            <div className="space-y-3">

                                {[
                                    "Object-Oriented Programming",
                                    "Full-Stack Programming",
                                    "Databases",
                                    "Software Testing",
                                    "UI / UX Design",
                                    "Web Development",
                                    "Data Analytics",
                                ].map(course => (
                                    <div
                                        key={course}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="text-primary"
                                        />

                                        <span className="text-muted-foreground">
                                            {course}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className="rounded-xl border border-primary/10 p-6">

                            <h4 className="font-semibold text-lg mb-4">
                                Current Studies
                            </h4>

                            <div className="space-y-3">

                                {[
                                    "Cross-Platform Mobile Development (React Native)",
                                    "Native Mobile Development (Kotlin / Swift)",
                                    "Advanced Full-Stack Development",
                                    "Modern Software Engineering",
                                ].map(course => (
                                    <div
                                        key={course}
                                        className="flex items-center gap-3"
                                    >
                                        <BookOpen
                                            size={18}
                                            className="text-primary"
                                        />

                                        <span className="text-muted-foreground">
                                            {course}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};
