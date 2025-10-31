import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

interface FallingIconsProps {
    icons: React.ComponentType<any>[];
    trigger?: "auto" | "scroll" | "click" | "hover";
    backgroundColor?: string;
    wireframes?: boolean;
    gravity?: number;
    mouseConstraintStiffness?: number;
    iconSize?: number;
}

const FallingIcons: React.FC<FallingIconsProps> = ({
    icons,
    trigger = "auto",
    backgroundColor = "transparent",
    wireframes = false,
    gravity = 1,
    mouseConstraintStiffness = 0.2,
    iconSize = 48,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const iconRef = useRef<HTMLDivElement | null>(null);
    const canvasContainerRef = useRef<HTMLDivElement | null>(null);
    const [effectStarted, setEffectStarted] = useState(false);

    useEffect(() => {
        if (trigger === "auto") {
            setEffectStarted(true);
            return;
        }
        if (trigger === "scroll" && containerRef.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setEffectStarted(true);
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(containerRef.current);
            return () => observer.disconnect();
        }
    }, [trigger]);

    useEffect(() => {
        if (!effectStarted) return;
        if (!containerRef.current || !canvasContainerRef.current || !iconRef.current) return;

        const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

        const containerRect = containerRef.current.getBoundingClientRect();
        const width = containerRect.width;
        const height = containerRect.height;

        const engine = Engine.create();
        engine.world.gravity.y = gravity;

        const render = Render.create({
            element: canvasContainerRef.current,
            engine,
            options: {
                width,
                height,
                background: backgroundColor,
                wireframes,
            },
        });

        const boundaryOptions = {
            isStatic: true,
            render: { fillStyle: "transparent" },
        };
        const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
        const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
        const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
        const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

        const iconElems = iconRef.current.querySelectorAll(".falling-icon");
        const iconBodies = [...iconElems].map((elem) => {
            const rect = elem.getBoundingClientRect();
            const x = rect.left - containerRect.left + rect.width / 2;
            const y = rect.top - containerRect.top + rect.height / 2;
            const body = Bodies.circle(x, y, rect.width / 2, {
                restitution: 0.9,
                frictionAir: 0.01,
                render: { visible: false },
            });
            return { elem, body };
        });

        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: mouseConstraintStiffness,
                render: { visible: false },
            },
        });
        render.mouse = mouse;

        World.add(engine.world, [
            floor,
            leftWall,
            rightWall,
            ceiling,
            mouseConstraint,
            ...iconBodies.map((w) => w.body),
        ]);

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);
        canvasContainerRef.current?.addEventListener(
            "wheel",
            (e) => {
                e.stopPropagation();
            },
            { passive: true }
        );

        const updateLoop = () => {
            iconBodies.forEach(({ elem, body }) => {
                const el = elem as HTMLElement;
                const { x, y } = body.position;
                const { angle } = body;
                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
                el.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
            });
            Matter.Engine.update(engine);
            requestAnimationFrame(updateLoop);
        };
        updateLoop();

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas && canvasContainerRef.current) {
                canvasContainerRef.current.removeChild(render.canvas);
            }
            World.clear(engine.world, false);
            Engine.clear(engine);
        };
    }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

    const handleTrigger = () => {
        if (!effectStarted && (trigger === "click" || trigger === "hover")) {
            setEffectStarted(true);
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden cursor-pointer"
            onClick={trigger === "click" ? handleTrigger : undefined}
            onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
        >
            <div ref={iconRef} className="relative flex justify-center flex-wrap gap-2">
                {icons.map((Icon, i) => (
                    <div
                        key={i}
                        className="falling-icon absolute"
                        style={{ width: iconSize, height: iconSize }}
                    >
                        <Icon size={iconSize} />
                    </div>
                ))}
            </div>
            <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
        </div>
    );
};

export default FallingIcons;
