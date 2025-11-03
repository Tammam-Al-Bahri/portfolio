import ASCIIText from "@/components/ASCIIText";
import LogoLoop from "@/components/LogoLoop";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cpu, FileText, Flag } from "lucide-react";
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
        { node: <SiGithub />, title: "Github", href: "https://github.com/" },
        {
            node: <SiGithubpages />,
            title: "Github Pages",
            href: "https://docs.github.com/en/pages/",
        },
    ];

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-auto w-screen h-screen dark:invert">
            <div className="max-w-5xl mx-auto h-[full+700px] lg:border-x-2 border-dashed bg-accent/10 dark:invert">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Portfolio"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-center">
                        <div className="relative w-[350px] h-[700px] rounded-[3rem] border-8 border-neutral-800 bg-black shadow-2xl overflow-hidden">
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-900 rounded-full z-10 opacity-80"></div>

                            <iframe
                                src="https://tammam-al-bahri.github.io/portfolio/"
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
                            <AccordionContent>*PUT STUFF HERE*</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Flag size={16} />
                                    Challenges and Takeaways
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-card-foreground">
                                <p className="py-4">
                                    Working on this project has been fantastic for my frontend
                                    proficiency. It has helped me solidify my Tailwind and React
                                    skills in particular, and get more confident in problem solving
                                    and experimenting with component architecture.
                                </p>
                                <p className="py-4">
                                    I've gotten especially comfortable with Shadcn and React Bits
                                    components, and that has motivated me to level up my workflow
                                    even further. As I begin to master these skills, I plan to start
                                    integrating tools like MCP and Cursor to cut down on repetitive
                                    tasks, so I can focus mainly on the backend logic and product
                                    goals.
                                </p>
                                <p className="py-4">
                                    This is also my first deployed project - a small but important
                                    milestone.
                                </p>
                                <p className="py-4">
                                    The design ended up being quite experimental since I let myself
                                    play with ideas instead of sticking to a wireframe. Honestly,
                                    that helped me explore UI/UX with real freedom.
                                </p>
                                <p className="py-4">
                                    Something I've realized is that my biggest bottleneck isn't my
                                    programming ability - it's knowing the specifics of what should
                                    be built, and all the small but important decisions early on,
                                    all with scalability in mind.
                                </p>
                                <p className="py-4">
                                    That's why I'm excited to work with experienced engineers and
                                    designers who can guide me in all software engineering aspects.
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
                            <AccordionContent className="flex items-center">
                                <LogoLoop
                                    logos={techLogos}
                                    speed={25}
                                    direction="right"
                                    logoHeight={32}
                                    gap={75}
                                    pauseOnHover
                                    scaleOnHover
                                    ariaLabel="Technology Stack"
                                    className="border-x-1 border-dashed mx-2"
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex justify-center mt-4 px-6 pt-4 pb-16">
                    <Button variant={"link"}>
                        <a href="https://github.com/Tammam-Al-Bahri/portfolio" target="_blank">
                            view code
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
