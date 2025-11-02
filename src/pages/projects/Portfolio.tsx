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
            <div className="max-w-5xl mx-auto h-full lg:border-x-2 border-dashed bg-accent/10 dark:invert">
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
                    <Accordion type="multiple">
                        <AccordionItem value="item-1" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center">
                                    <FileText size={16} />
                                    Overview
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>*PUT STUFF HERE*</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center">
                                    <Flag size={16} />
                                    Challenges and Takeaways
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                To be honest the reason why this website is kind of crazy is because
                                I kept messing around with cool components rather than making a
                                wireframe. I'm happy though, how was I meant to make a wireframe
                                when I didn't really know what I was doing?
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center">
                                    <Cpu size={16} />
                                    Technology Used
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <LogoLoop
                                    logos={techLogos}
                                    speed={25}
                                    direction="right"
                                    logoHeight={24}
                                    gap={100}
                                    pauseOnHover
                                    scaleOnHover
                                    ariaLabel="Technology Stack"
                                    className="border-x-1 border-dashed"
                                />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <Button variant={"link"} className="fixed bottom-16 left-0 right-0">
                    <a href="https://github.com/Tammam-Al-Bahri/portfolio" target="_blank">
                        view code
                    </a>
                </Button>
            </div>
        </div>
    );
}
