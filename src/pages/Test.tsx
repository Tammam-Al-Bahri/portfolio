import Stack from "@/components/Stack";
import me from "/images/me.jpg";
import LogoLoop from "@/components/LogoLoop";
import {
    SiDocker,
    SiDotnet,
    SiNextdotjs,
    SiPrisma,
    SiReact,
    SiShadcnui,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export default function Test() {
    const images = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        },
        { id: 2, img: me },
    ];

    const techLogos = [
        {
            node: <SiDotnet />,
            title: "C#",
            href: "https://dotnet.microsoft.com/en-us/languages/csharp",
        },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiPrisma />, title: "Prisma", href: "https://www.prisma.io" },
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiShadcnui />, title: "shadcn", href: "https://ui.shadcn.com" },
    ];
    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center gap-6">
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={true}
                    cardDimensions={{ width: 200, height: 200 }}
                    cardsData={images}
                />
            </div>
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
                <LogoLoop
                    logos={techLogos}
                    speed={10}
                    direction="right"
                    logoHeight={48}
                    gap={40}
                    pauseOnHover
                    scaleOnHover
                    ariaLabel="Technology Stack"
                />
            </section>
        </div>
    );
}
