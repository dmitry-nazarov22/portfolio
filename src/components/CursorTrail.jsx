import { useEffect, useRef } from "react";

export const CursorTrail = () => {
    const trailRef = useRef(null);

    useEffect(() => {
        const container = trailRef.current;
        const preference = window.matchMedia(
            "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
        );
        const particles = new Map();
        let lastEmission = 0;
        let previousPosition = null;

        const clear = () => {
            particles.forEach((animation, particle) => {
                animation.cancel();
                particle.remove();
            });
            particles.clear();
            previousPosition = null;
            lastEmission = 0;
        };

        const onMove = (event) => {
            if (!preference.matches || event.pointerType !== "mouse") return;

            const now = performance.now();
            const { clientX: x, clientY: y } = event;
            if (now - lastEmission < 40 || particles.size >= 24) return;
            if (previousPosition && Math.hypot(x - previousPosition.x, y - previousPosition.y) < 5) return;

            lastEmission = now;
            previousPosition = { x, y };

            const particle = document.createElement("span");
            const size = 2 + Math.random() * 2;
            const angle = Math.random() * Math.PI * 2;
            const distance = 15 + Math.random() * 35;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance + 15;
            const rotation = Math.random() * 180;
            const transform = (progress, scale) =>
                `translate(calc(-50% + ${dx * progress}px), calc(-50% + ${dy * progress}px)) rotate(${rotation + progress * 90}deg) scale(${scale})`;

            particle.className = "cursor-trail-particle";
            Object.assign(particle.style, {
                left: `${x + (Math.random() - 0.5) * 8}px`,
                top: `${y + (Math.random() - 0.5) * 8}px`,
                width: `${size}px`,
                height: `${size}px`,
            });
            container.appendChild(particle);

            const animation = particle.animate([
                { opacity: 0.95, transform: transform(0, 0.65) },
                { opacity: 1, transform: transform(0.15, 1.2), offset: 0.18 },
                { opacity: 0.6, transform: transform(0.55, 0.8), offset: 0.55 },
                { opacity: 0, transform: transform(1, 0.1) },
            ], { duration: 650 + Math.random() * 250, easing: "ease-out", fill: "forwards" });

            particles.set(particle, animation);
            animation.onfinish = () => {
                particle.remove();
                particles.delete(particle);
            };
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("blur", clear);
        document.documentElement.addEventListener("pointerleave", clear);
        document.addEventListener("visibilitychange", clear);
        preference.addEventListener("change", clear);

        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("blur", clear);
            document.documentElement.removeEventListener("pointerleave", clear);
            document.removeEventListener("visibilitychange", clear);
            preference.removeEventListener("change", clear);
            clear();
        };
    }, []);

    return <div ref={trailRef} className="cursor-trail" aria-hidden="true" />;
};
