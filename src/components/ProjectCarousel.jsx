import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";

export const ProjectCarousel = ({ projects }) => {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goTo = (index) => {
        const track = trackRef.current;
        const boundedIndex = Math.max(0, Math.min(index, projects.length - 1));
        const slide = track.children[boundedIndex];
        track.scrollTo({
            left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
    };

    const syncPosition = () => {
        const track = trackRef.current;
        const center = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let distance = Infinity;
        Array.from(track.children).forEach((slide, index) => {
            const offset = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
            if (offset < distance) {
                nearest = index;
                distance = offset;
            }
        });
        setActiveIndex(nearest);
    };

    return (
        <section className="relative" aria-label="Other projects" aria-roledescription="carousel">
            <div
                id="other-project-carousel"
                ref={trackRef}
                className="project-carousel-track"
                tabIndex={0}
                aria-label="Project cards. Use left and right arrow keys to browse."
                onScroll={syncPosition}
                onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    let next;
                    if (event.key === "ArrowRight") next = activeIndex + 1;
                    if (event.key === "ArrowLeft") next = activeIndex - 1;
                    if (event.key === "Home") next = 0;
                    if (event.key === "End") next = projects.length - 1;
                    if (next !== undefined) {
                        event.preventDefault();
                        goTo(next);
                    }
                }}
            >
                {projects.map((project, index) => {
                    const selected = index === activeIndex;
                    return (
                        <div key={project.id} className="project-carousel-slide" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${projects.length}: ${project.title}`}>
                            <article className="project-carousel-card" data-position={selected ? "center" : index < activeIndex ? "left" : "right"}>
                                <img src={project.image} alt={project.title} className="w-full h-44 sm:h-52 object-contain bg-black/10" loading="lazy" draggable={false} />
                                <div className="p-5 sm:p-6 text-left flex flex-col flex-1">
                                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                                    {project.contribution && (
                                        <div className="mb-5 border-l-2 border-primary/40 pl-4">
                                            <h4 className="text-sm font-semibold mb-2">My Contribution</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{project.contribution}</p>
                                        </div>
                                    )}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => <span key={tag} className="rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs">{tag}</span>)}
                                    </div>
                                    <div className="flex flex-wrap justify-between gap-4 mt-auto">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" tabIndex={selected ? 0 : -1} className="flex items-center gap-2 hover:text-primary">
                                            <Github size={18} /> GitHub
                                        </a>
                                        {(project.demoUrl || project.webUrl) && (
                                            <a href={project.demoUrl || project.webUrl} target="_blank" rel="noopener noreferrer" tabIndex={selected ? 0 : -1} className="flex items-center gap-2 hover:text-primary">
                                                {project.demoUrl ? "Live Demo" : "Project Website"} <ArrowRight size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                {!selected && <button type="button" tabIndex={-1} onClick={() => goTo(index)} className="absolute inset-0 cursor-pointer rounded-2xl" aria-label={`Center ${project.title}`} />}
                            </article>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-5 mt-2">
                <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous project" aria-controls="other-project-carousel" className="project-carousel-arrow project-carousel-arrow-prev p-3 rounded-full border border-primary/30 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary"><ArrowLeft size={20} /></button>
                <div className="flex">
                    {projects.map((project, index) => (
                        <button key={project.id} type="button" onClick={() => goTo(index)} aria-label={`Show ${project.title}`} aria-current={activeIndex === index ? "true" : undefined} aria-controls="other-project-carousel" className="p-3 rounded-full focus-visible:outline-2 focus-visible:outline-primary">
                            <span className={`block h-2 rounded-full transition-all motion-reduce:transition-none ${activeIndex === index ? "w-6 bg-primary" : "w-2 bg-primary/30"}`} />
                        </button>
                    ))}
                </div>
                <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === projects.length - 1} aria-label="Next project" aria-controls="other-project-carousel" className="project-carousel-arrow project-carousel-arrow-next p-3 rounded-full border border-primary/30 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary"><ArrowRight size={20} /></button>
            </div>
            <p className="sr-only" aria-live="polite" aria-atomic="true">{projects[activeIndex].title}</p>
        </section>
    );
};
