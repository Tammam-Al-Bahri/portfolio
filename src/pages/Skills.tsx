import LogoLoop from "@/components/LogoLoop";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
} from "react-icons/si";
import pages from ".";
import { useNavigate } from "react-router-dom";

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
    ];
    const navigate = useNavigate();
    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="flex flex-col gap-6 p-6 max-w-4xl mx-auto mb-16">
                <div className="text-center">*ADD SOMETHING HERE*</div>
                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle>Technical Skills</CardTitle>
                        <CardDescription>
                            Tools, languages, and frameworks I have experience with.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        *ADD MORE CONTEXT AND STUFF*
                    </CardContent>
                    <CardFooter>
                        <LogoLoop
                            logos={techLogos}
                            speed={10}
                            direction="right"
                            logoHeight={40}
                            gap={50}
                            pauseOnHover
                            scaleOnHover
                            ariaLabel="Technology Stack"
                            className=""
                        />
                    </CardFooter>
                </Card>

                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle>Personal Skills</CardTitle>
                        <CardDescription>How I approach work and problem solving.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {[
                            "Clean code mindset",
                            "Problem solving",
                            "Self-directed learning",
                            "Attention to detail",
                            "Good communication",
                            "Adaptability",
                            "*ADD MORE*",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 border rounded-lg text-sm bg-background/50"
                            >
                                {skill}
                            </span>
                        ))}
                    </CardContent>
                </Card>

                <Card className="shadow-xl">
                    <CardHeader>
                        <CardTitle>Languages & Interests</CardTitle>
                        <CardDescription>*DESCRIPTION*</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {[
                            "English (fluent)",
                            "Arabic (native)",
                            "Violin",
                            "Gym",
                            "Calisthenics",
                            "Music production",
                            "*ADD MORE*",
                        ].map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 border rounded-lg text-sm bg-background/50"
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
