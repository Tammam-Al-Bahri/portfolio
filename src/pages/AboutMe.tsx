import LogoLoop from "@/components/LogoLoop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    SiDocker,
    SiDotnet,
    SiNextdotjs,
    SiPrisma,
    SiReact,
    SiShadcnui,
    SiTailwindcss,
    SiTypescript,
    SiReactrouter,
    SiExpress,
    SiVite,
    SiElectron,
    SiJavascript,
    SiClerk,
    SiGit,
    SiGithub,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiCss3,
    SiGithubpages,
} from "react-icons/si";
import ASCIIText from "@/components/ASCIIText";
import { useState, useEffect } from "react";
import NavButtons from "@/components/NavButtons";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { List } from "lucide-react";

export default function AboutMe() {
    const techLogos = [
        {
            node: <SiDotnet />,
            title: "C#",
            href: "https://dotnet.microsoft.com/en-us/languages/csharp",
        },
        {
            node: <SiJavascript />,
            title: "JavaScript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiReactrouter />, title: "React Router", href: "https://reactrouter.com" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiVite />, title: "Vite", href: "https://vite.dev/" },
        { node: <SiElectron />, title: "Electron", href: "https://www.electronjs.org/" },
        { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
        { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org/" },
        { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
        { node: <SiSqlite />, title: "SQLite", href: "https://sqlite.org/" },
        { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <SiCss3 />, title: "CSS", href: "https://en.wikipedia.org/wiki/CSS" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiShadcnui />, title: "Shadcn", href: "https://ui.shadcn.com" },
        { node: <SiClerk />, title: "Clerk", href: "https://clerk.com/" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
        { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
        {
            node: <SiGithubpages />,
            title: "GitHub Pages",
            href: "https://docs.github.com/en/pages/",
        },
    ];
    const skills = [
        "Attention to Detail",
        "Intuition",
        "Problem Solving",
        "Active Listening",
        "Competitive Mindset",
        "Analytical Thinking",
        "Perseverance",
        "Leadership",
        "Teamwork",
    ];
    const interests = [
        "Gym",
        "Calisthenics",
        "Crypto and Blockchain",
        "Violin",
        "Music Production",
        "Maths",
        "Chemistry",
        "Blitz Chess",
    ];

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const [scaleTextClass, setScaleTextClass] = useState("scale-100");
    const [scaleCardClass, setScaleCardClass] = useState("scale-100");

    const textFallDuration = 200;
    const cardScaleDuration = 150;

    const handleMouseLeave = () => {
        setTimeout(() => {
            setScaleTextClass("scale-100");
        });

        setTimeout(() => {
            setScaleCardClass("scale-99");
        }, textFallDuration);

        setTimeout(() => {
            setScaleCardClass("scale-100");
        }, textFallDuration + cardScaleDuration);
    };

    const handleMouseEnter = () => {
        setScaleTextClass("scale-105");
        setScaleCardClass("scale-100");
    };

    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="max-w-5xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="About Me"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>

                <div className="flex flex-col gap-6 px-12">
                    <Card
                        className={`shadow-md mt-16 transition-transform duration-${cardScaleDuration} ${scaleCardClass}`}
                    >
                        <CardHeader>
                            <CardTitle>Technologies I've used</CardTitle>
                            <CardDescription>I'm still learning.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <LogoLoop
                                    logos={techLogos}
                                    speed={25}
                                    direction="right"
                                    logoHeight={40}
                                    gap={50}
                                    pauseOnHover
                                    scaleOnHover
                                    ariaLabel="Technology Stack"
                                    className={`border-x-1 border-dashed ${scaleTextClass} transition-transform duration-${textFallDuration} ease-in`}
                                />
                            </div>
                            <Accordion type="multiple">
                                <AccordionItem value="item-1" className="border-dashed">
                                    <AccordionTrigger>
                                        <div className="flex gap-2 items-center">
                                            <List size={16} />
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-wrap gap-2">
                                            {techLogos.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={item.href}
                                                    target="_blank"
                                                    className={`px-3 py-1 border rounded-lg text-xs bg-accent hover:scale-105 select-none`}
                                                >
                                                    {item.title}
                                                </a>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>
                    <Card className="shadow-md hover:scale-101">
                        <CardHeader>
                            <CardTitle>Personal Skills</CardTitle>
                            <CardDescription>What I'm like.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 border rounded-lg text-sm bg-accent hover:scale-105 select-none"
                                >
                                    {skill}
                                </span>
                            ))}
                        </CardContent>
                    </Card>
                    <Card className="shadow-md hover:scale-101">
                        <CardHeader>
                            <CardTitle>Interests</CardTitle>
                            <CardDescription>Some of my hobbies.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {interests.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 border rounded-lg text-sm bg-accent hover:scale-105 select-none"
                                >
                                    {item}
                                </span>
                            ))}
                        </CardContent>
                    </Card>
                    <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 pt-4 pb-8">
                        <NavButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}
