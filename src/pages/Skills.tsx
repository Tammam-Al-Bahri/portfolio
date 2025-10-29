import LogoLoop from "@/components/LogoLoop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
} from "react-icons/si";
import pages from ".";
import { useNavigate } from "react-router-dom";
import ASCIIText from "@/components/ASCIIText";
import ShinyText from "@/components/ShinyText";
import { useState, useEffect } from "react";
import ElectricBorder from "@/components/ElectricBorder";
import { useTheme } from "@/components/theme-provider";

export default function Skills() {
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
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiShadcnui />, title: "Shadcn", href: "https://ui.shadcn.com" },
        { node: <SiClerk />, title: "Clerk", href: "https://clerk.com/" },
        { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
        { node: <SiGithub />, title: "Github", href: "https://github.com/" },
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
        "English (fluent)",
        "Arabic (native)",
        "Violin",
        "Gym",
        "Calisthenics",
        "Crypto and Blockchain",
        "Music Production",
        "Maths",
        "Chemistry",
        "Blitz Chess",
        "Rowing",
    ];
    const navigate = useNavigate();
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const [scaleTextClass, setScaleTextClass] = useState("scale-115");
    const [scaleCardClass, setScaleCardClass] = useState("scale-100");

    const animationDelay = 100;
    const textFallDuration = 200;
    const cardScaleDuration = 150;

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setScaleTextClass("scale-100");
        }, animationDelay);

        const cardUpTimer = setTimeout(() => {
            setScaleCardClass("scale-101");
        }, animationDelay + textFallDuration);

        const cardDownTimer = setTimeout(() => {
            setScaleCardClass("scale-100");
        }, animationDelay + textFallDuration + cardScaleDuration);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(cardUpTimer);
            clearTimeout(cardDownTimer);
        };
    }, []);

    const { theme } = useTheme();
    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="max-w-4xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Skills"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>

                <div className="flex flex-col gap-6 px-6">
                    <ElectricBorder
                        color={theme == "light" ? "#7dffdc" : "#27e676"}
                        speed={0.2}
                        chaos={0.5}
                        thickness={2}
                        className="rounded-xl"
                    >
                        <Card
                            className={`m-1 shadow-md transition-transform duration-100 ease-in ${scaleCardClass}`}
                        >
                            <div
                                className={`p-4 lg:px-8 text-center max-w-3xl mx-auto space-y-6 ${scaleTextClass} transition-transform duration-${textFallDuration} ease-in`}
                            >
                                <section>
                                    <p className="font-semibold text-xl">
                                        I'm passionate about building practical, scalable, and
                                        useful apps.
                                    </p>
                                </section>
                                <section>
                                    <p>
                                        I'm diving deep into{" "}
                                        <ShinyText
                                            text="TypeScript"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold"
                                        />{" "}
                                        and its ecosystem because it's a powerful foundation for
                                        creating robust applications and a valuable skill for modern
                                        development.
                                    </p>
                                </section>
                                <section>
                                    <p>
                                        I enjoy hyper-focusing on specific challenges and bringing
                                        ideas to life - I thrive with clear goals and structure, and
                                        love solving real world problems.
                                    </p>
                                </section>
                            </div>
                        </Card>
                    </ElectricBorder>
                    <Card className="shadow-md mt-32">
                        <CardHeader>
                            <CardTitle>Technical Skills</CardTitle>
                            <CardDescription>
                                Tools, languages, and frameworks I have experience with.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LogoLoop
                                logos={techLogos}
                                speed={25}
                                direction="right"
                                logoHeight={40}
                                gap={50}
                                pauseOnHover
                                scaleOnHover
                                ariaLabel="Technology Stack"
                                className="border-x-1 border-dashed"
                            />
                            <p className="py-4 text-muted-foreground text-center">
                                My current stack for web apps is{" "}
                                <ShinyText
                                    text="Next.js + Prisma"
                                    disabled={false}
                                    speed={4}
                                    className="invert dark:invert-0 font-bold"
                                />
                                , and for desktop apps I'm working with{" "}
                                <ShinyText
                                    text="Electron + Vite + React + React Router"
                                    disabled={false}
                                    speed={4}
                                    className="invert dark:invert-0 font-bold"
                                />{" "}
                                with an{" "}
                                <ShinyText
                                    text="Express + Prisma + PostgreSQL"
                                    disabled={false}
                                    speed={4}
                                    className="invert dark:invert-0 font-bold"
                                />{" "}
                                backend.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {techLogos.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className="px-3 py-1 border rounded-lg text-xs bg-secondary hover:scale-105 select-none"
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-md mt-16">
                        <CardHeader>
                            <CardTitle>Personal Skills</CardTitle>
                            <CardDescription>Skills that define me.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 border rounded-lg text-sm bg-secondary hover:scale-105 select-none"
                                >
                                    {skill}
                                </span>
                            ))}
                        </CardContent>
                    </Card>
                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle>Languages & Interests</CardTitle>
                            <CardDescription>What I speak and what I love.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {interests.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 border rounded-lg text-sm bg-secondary hover:scale-105 select-none"
                                >
                                    {item}
                                </span>
                            ))}
                        </CardContent>
                    </Card>
                    <div className="flex justify-between w-full max-w-4xl mx-auto mt-4 pt-4 pb-8">
                        <Button
                            variant="outline"
                            onClick={() => navigate(pages[0].path, { replace: true })}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft />
                            {pages[0].title}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => navigate(pages[2].path, { replace: true })}
                            className="flex items-center gap-2"
                        >
                            {pages[2].title}
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
