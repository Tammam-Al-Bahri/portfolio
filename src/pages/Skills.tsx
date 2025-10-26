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
} from "react-icons/si";
import pages from ".";
import { useNavigate } from "react-router-dom";
import ASCIIText from "@/components/ASCIIText";
import ShinyText from "@/components/ShinyText";

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
        { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiShadcnui />, title: "Shadcn", href: "https://ui.shadcn.com" },
        { node: <SiClerk />, title: "Clerk", href: "https://clerk.com/" },
    ];
    const skills = [
        "Attention to Detail",
        "Intuition",
        "Problem Solving",
        "Active Listening",
        "Competitive Mindset",
        "Analytical Thinking",
        "Perseverance",
        "Teamwork",
        "Leadership",
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
    ];
    const navigate = useNavigate();
    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] border-accent-foreground invert dark:invert-0">
                    <ASCIIText text="Skills" enableWaves={false} asciiFontSize={8} />
                </div>
                <div className="px-4 pb-4 lg:px-8 text-center max-w-3xl mx-auto space-y-6">
                    <section>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            I'm passionate about building practical, scalable, and useful apps.
                        </p>
                    </section>

                    <section>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            I'm diving deep into{" "}
                            <ShinyText
                                text="TypeScript"
                                disabled={false}
                                speed={4}
                                className="invert dark:invert-0 font-bold"
                            />{" "}
                            and its ecosystem because it's a powerful foundation for creating robust
                            applications and a valuable skill for modern development.
                        </p>
                    </section>

                    <section>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            My current stack for web apps is{" "}
                            <ShinyText
                                text="Next.js + Shadcn + Prisma"
                                disabled={false}
                                speed={4}
                                className="invert dark:invert-0 font-bold"
                            />{" "}
                            , and for desktop apps I'm working with{" "}
                            <ShinyText
                                text="Electron + Vite + React + React Router + Prisma + Express."
                                disabled={false}
                                speed={4}
                                className="invert dark:invert-0 font-bold"
                            />
                        </p>
                    </section>

                    <section>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            I enjoy hyper-focusing on specific challenges and bringing ideas to life
                            - I thrive with clear goals and structure, and love solving real-world
                            problems.
                        </p>
                    </section>
                </div>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Technical Skills</CardTitle>
                        <CardDescription>
                            Tools, languages, and frameworks I have experience with.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LogoLoop
                            logos={techLogos}
                            speed={10}
                            direction="right"
                            logoHeight={40}
                            gap={50}
                            pauseOnHover
                            scaleOnHover
                            ariaLabel="Technology Stack"
                            className="border-x-1 border-dashed"
                        />
                    </CardContent>
                </Card>

                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle>Personal Skills</CardTitle>
                        <CardDescription>Skills that define me.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 border rounded-lg text-sm bg-secondary"
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
                                className="px-3 py-1 border rounded-lg text-sm bg-secondary"
                            >
                                {item}
                            </span>
                        ))}
                    </CardContent>
                </Card>
                <div className="flex justify-between w-full max-w-4xl mx-auto mt-4 pb-8">
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
    );
}
