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
import nftScanner1 from "/images/projects/nft-scanner/lootboxes-with-weapon-data-json-screenshot.jpg";
import nftScanner2 from "/images/projects/nft-scanner/console-get-all-mint-addresses-js.jpg";
import nftScanner3 from "/images/projects/nft-scanner/console-scanner-js.jpg";
import nftScanner4 from "/images/projects/nft-scanner/wallet-confirm-lootbox-open.jpg";
import portfolio1 from "/images/projects/portfolio/projects.jpg";
import granada1 from "/images/projects/granada/app-and-docker.jpg";
import frank1 from "/images/projects/frank/pcb.jpg";
import frank2 from "/images/projects/frank/login-screen.jpg";
import uniTsk1 from "/images/projects/university-projects/tsk-collaborator-editing-subtask.jpg";
import uniTsk2 from "/images/projects/university-projects/tsk-home.jpg";
import uniTsk3 from "/images/projects/university-projects/tsk-managing-invites.jpg";
import {
    SiDotnet,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiReactrouter,
    SiNextdotjs,
    SiVite,
    SiElectron,
    SiPrisma,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiExpress,
    SiDocker,
    SiTailwindcss,
    SiShadcnui,
    SiClerk,
    SiLinuxmint,
    SiCss3,
    SiGithubpages,
} from "react-icons/si";
import FallingIcons from "@/components/FallingIcons";

export default function Projects() {
    const variants = ["default", "blue", "yellow", "pink"] as const;
    const projects = [
        {
            page: pages[4],
            variant: 1,
            icon: Paperclip,
            images: [{ id: 1, img: portfolio1 }],
            logos: [
                SiTypescript,
                SiVite,
                SiReact,
                SiReactrouter,
                SiShadcnui,
                SiTailwindcss,
                SiCss3,
                SiGithubpages,
            ],
        },
        {
            page: pages[7],
            variant: 3,
            icon: SearchCode,
            images: [
                { id: 4, img: nftScanner4 },
                { id: 3, img: nftScanner3 },
                { id: 2, img: nftScanner2 },
                { id: 1, img: nftScanner1 },
            ],
            logos: [SiJavascript],
        },
        {
            page: pages[3],
            variant: 0,
            icon: BriefcaseBusiness,
            images: [{ id: 1, img: granada1 }],
            logos: [
                SiTypescript,
                SiElectron,
                SiVite,
                SiReact,
                SiReactrouter,
                SiTailwindcss,
                SiShadcnui,
                SiDocker,
                SiExpress,
                SiPrisma,
                SiPostgresql,
            ],
        },
        {
            page: pages[5],
            variant: 2,
            icon: University,
            images: [
                { id: 2, img: uniTsk2 },
                { id: 1, img: uniTsk1 },
                { id: 3, img: uniTsk3 },
            ],
            logos: [
                SiDotnet,
                SiJavascript,
                SiTypescript,
                SiNextdotjs,
                SiReact,
                SiCss3,
                SiTailwindcss,
                SiSqlite,
                SiMysql,
                SiClerk,
            ],
        },
        {
            page: pages[6],
            variant: 0,
            icon: Bot,
            images: [
                { id: 2, img: frank2 },
                { id: 1, img: frank1 },
            ],
            logos: [SiLinuxmint],
        },
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
        <div className="relative overflow-auto w-screen h-screen dark:invert">
            <div className="max-w-5xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10 dark:invert">
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
                    {projects.map((project) => {
                        const [iconsVisible, setIconsVisible] = useState(false);
                        return (
                            <PixelCard
                                key={project.page.path}
                                variant={variants[project.variant]}
                                className="bg-card border-border shadow-xl hover:scale-101"
                            >
                                <div
                                    className={`absolute w-full h-full ${scaleClass} transition-transform duration-500 ease-in-out group`}
                                >
                                    <project.icon className="scale-150 m-4 z-10" />
                                    <div className="text-2xl text-center font-bold">
                                        {project.page.title}
                                    </div>
                                    <div
                                        className={`absolute inset-0 md:opacity-0 ${
                                            iconsVisible ? "md:opacity-100" : "opacity-0"
                                        } group-hover:opacity-100 transition-opacity duration-200`}
                                        onClick={() => {
                                            setIconsVisible(true);
                                        }}
                                    >
                                        <FallingIcons
                                            icons={project.logos}
                                            trigger="hover"
                                            gravity={0.8}
                                            iconSize={32}
                                            wireframes={false}
                                            mouseConstraintStiffness={0.9}
                                        />
                                    </div>
                                    <div className="flex justify-center my-4 z-10">
                                        <Stack
                                            randomRotation={true}
                                            sensitivity={180}
                                            sendToBackOnClick={true}
                                            cardDimensions={{ width: 200, height: 200 }}
                                            cardsData={project.images}
                                        />
                                    </div>
                                    <div className="flex justify-end mx-[50px]">
                                        <Button
                                            className="w-full z-10"
                                            onClick={() => {
                                                navigate(project.page.path, { replace: true });
                                            }}
                                        >
                                            View
                                        </Button>
                                    </div>
                                </div>
                            </PixelCard>
                        );
                    })}
                    <div className="flex-grow basis-[300px] max-w-[300px]" />
                </div>
                <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 px-6 pt-4 pb-8">
                    <Button
                        variant="outline"
                        onClick={() => navigate(pages[1].path, { replace: true })}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft />
                        {pages[1].title}
                    </Button>
                    <Button variant="outline" size="icon" onClick={toggleSidebar}>
                        <PanelLeftIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}
