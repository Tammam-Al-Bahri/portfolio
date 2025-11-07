import ASCIIText from "@/components/ASCIIText";
import ElectricBorder from "@/components/ElectricBorder";
import GradientText from "@/components/GradientText";
import LogoLoop from "@/components/LogoLoop";
import ShinyText from "@/components/ShinyText";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cpu, ExternalLink, FileText, Flag } from "lucide-react";
import { useState, useEffect } from "react";
import {
    SiTypescript,
    SiReact,
    SiReactrouter,
    SiVite,
    SiCss3,
    SiTailwindcss,
    SiShadcnui,
    SiGit,
    SiGithub,
    SiGithubpages,
} from "react-icons/si";

export default function Portfolio() {
    const techLogos = [
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiReactrouter />, title: "React Router", href: "https://reactrouter.com" },
        { node: <SiVite />, title: "Vite", href: "https://vite.dev/" },
        { node: <SiCss3 />, title: "CSS", href: "https://en.wikipedia.org/wiki/CSS" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiShadcnui />, title: "Shadcn", href: "https://ui.shadcn.com" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
        { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
        {
            node: <SiGithubpages />,
            title: "GitHub Pages",
            href: "https://docs.github.com/en/pages/",
        },
    ];

    const [level, setLevel] = useState(0);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lvl = parseInt(params.get("level") || "0");
        setLevel(lvl);
    }, []);

    const nextLevel = level + 1;

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-auto w-screen h-screen dark:invert">
            <div className="max-w-5xl mx-auto lg:border-x-2 border-dashed bg-accent/10 dark:invert">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Portfolio"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="text-center italic select-none">Live View:</div>
                    <div className="relative flex justify-center group select-none">
                        <div className="text-center text-sm text-muted-foreground font-mono group-hover:underline">
                            Inception Level: {level}
                        </div>
                        <div className="absolute top-full z-10 mt-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                            navigate to this page on the phone
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-[400px] h-[750px] scale-100 rounded-[3rem] border-8 border-neutral-800 bg-black shadow-2xl overflow-hidden">
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-full z-10 opacity-80"></div>

                            <iframe
                                src={`https://tammam-al-bahri.github.io/portfolio/?level=${nextLevel}&rnd=${Math.random()}`}
                                title="Portfolio Inception"
                                className="w-full h-full rounded-[2.5rem] overflow-hidden"
                            ></iframe>
                        </div>
                    </div>

                    <Accordion type="multiple">
                        <AccordionItem value="item-1" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <FileText size={16} />
                                    Overview
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-card-foreground">
                                <p>
                                    A personal portfolio website built with React to showcase my
                                    projects, skills, and background. It has a clean, interactive,
                                    and mobile-first UI, and is deployed with GitHub Pages.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Flag size={16} />
                                    Challenges and Takeaways
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-card-foreground">
                                <p className="pb-4">
                                    Working on this project has been fantastic for my frontend
                                    proficiency. It has helped me solidify my React and Tailwind
                                    skills in particular, and get more confident in problem solving
                                    and experimenting with component architecture.
                                </p>
                                <p>
                                    The design ended up being experimental since I let myself play
                                    with ideas instead of sticking to a wireframe. This helped me
                                    explore UI/UX with more freedom.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Cpu size={16} />
                                    Technologies Used
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-card-foreground">
                                <div className="flex items-center">
                                    <LogoLoop
                                        logos={techLogos}
                                        speed={25}
                                        direction="right"
                                        logoHeight={32}
                                        gap={75}
                                        pauseOnHover
                                        scaleOnHover
                                        ariaLabel="Technology Stack"
                                        className="border-x-1 border-dashed"
                                    />
                                </div>
                                <ul className="py-4 px-4 text-lg list-disc">
                                    <li className="pt-2">
                                        <ShinyText
                                            text="React"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - component based UI and hooks for clean, reusable front-end
                                        structure
                                    </li>

                                    <li className="pt-2">
                                        <ShinyText
                                            text="Vite"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - fast dev environment with instant HMR and optimized builds
                                    </li>

                                    <li className="pt-2">
                                        <ShinyText
                                            text="TypeScript"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - strong typing for safer and more maintainable code
                                    </li>

                                    <li className="pt-2">
                                        <ShinyText
                                            text="React Router"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - client side routing for a smooth SPA experience
                                    </li>

                                    <li className="pt-2">
                                        <ShinyText
                                            text="Tailwind CSS"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - utility first styling for fast iteration
                                    </li>

                                    <li className="pt-2">
                                        <ShinyText
                                            text="Shadcn"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - customisable components to speed up development
                                    </li>

                                    <li className="pt-2">
                                        <ShinyText
                                            text="React Bits"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - interactive UI effects
                                    </li>

                                    <li className="pt-2">
                                        <ShinyText
                                            text="GitHub Pages"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - simple and reliable deployment for static hosting
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex justify-center mt-4 px-6 pt-4 pb-24">
                    <ElectricBorder
                        color="#27e676"
                        speed={2}
                        chaos={0.5}
                        thickness={2}
                        className="rounded-xl p-1"
                    >
                        <Button variant={"outline"}>
                            <a
                                href="https://github.com/Tammam-Al-Bahri/portfolio"
                                target="_blank"
                                className="text-xl flex items-center"
                            >
                                <GradientText
                                    colors={["#078000", "#259463", "#269693", "#078000"]}
                                    animationSpeed={10}
                                    showBorder={false}
                                    className="px-2"
                                >
                                    code
                                </GradientText>
                                <ExternalLink />
                            </a>
                        </Button>
                    </ElectricBorder>
                </div>
            </div>
        </div>
    );
}
