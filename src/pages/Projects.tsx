import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Bot,
    BriefcaseBusiness,
    PanelLeftIcon,
    Paperclip,
    SearchCode,
    University,
} from "lucide-react";
import pages from ".";
import { useNavigate } from "react-router-dom";
import ASCIIText from "@/components/ASCIIText";
import { useState, useEffect } from "react";
import PixelCard from "@/components/PixelCard";
import { useSidebar } from "@/components/ui/sidebar";
import Stack from "@/components/Stack";
import me from "/images/me.jpg";

export default function Projects() {
    const variants = ["default", "blue", "yellow", "pink"] as const;
    const projects = [
        { page: pages[3], variant: 0, icon: BriefcaseBusiness, images: [{ id: 1, img: me }] },
        { page: pages[4], variant: 1, icon: Paperclip, images: [{ id: 1, img: me }] },
        { page: pages[7], variant: 3, icon: SearchCode, images: [{ id: 1, img: me }] },
        { page: pages[5], variant: 2, icon: University, images: [{ id: 1, img: me }] },
        { page: pages[6], variant: 0, icon: Bot, images: [{ id: 1, img: me }] },
    ];

    const navigate = useNavigate();
    const [rerender, setRerender] = useState(false);

    const { toggleSidebar } = useSidebar();

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const [scaleClass, setScaleClass] = useState("scale-0");

    useEffect(() => {
        setTimeout(() => {
            setScaleClass("scale-100");
        }, 100);
    }, []);

    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="max-w-4xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Projects"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-6 px-6">
                    {projects.map((project) => (
                        <PixelCard
                            variant={variants[project.variant]}
                            className="bg-card border-border shadow-xl"
                        >
                            <div
                                className={`absolute ${scaleClass} transition-transform duration-500 ease-in-out`}
                            >
                                <project.icon />
                                <div>{project.page.title}</div>
                                <Stack
                                    randomRotation={true}
                                    sensitivity={180}
                                    sendToBackOnClick={true}
                                    cardDimensions={{ width: 200, height: 200 }}
                                    cardsData={project.images}
                                />
                                <Button
                                    onClick={() => navigate(project.page.path, { replace: true })}
                                >
                                    View
                                </Button>
                            </div>
                        </PixelCard>
                    ))}
                </div>
                <div className="flex justify-between w-full max-w-4xl mx-auto mt-4 px-6 pt-4 pb-8">
                    <Button
                        variant="outline"
                        onClick={() => navigate(pages[1].path, { replace: true })}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft />
                        {pages[1].title}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={toggleSidebar}
                        className="flex items-center gap-2"
                    >
                        <PanelLeftIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}
