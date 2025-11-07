import ASCIIText from "@/components/ASCIIText";
import NavButtons from "@/components/NavButtons";
import { useState, useEffect } from "react";
import laptop1 from "/images/projects/repurposed-laptop/pcb.jpg";
import laptop2 from "/images/projects/repurposed-laptop/login-screen.jpg";
import Stack from "@/components/Stack";

export default function RepurposedLaptop() {
    const images = [
        { id: 2, img: laptop2 },
        { id: 1, img: laptop1 },
    ];

    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-auto w-screen h-screen dark:invert">
            <div className="max-w-5xl mx-auto mb-12 lg:border-x-2 border-dashed bg-accent/10 dark:invert">
                <div className="relative w-full h-64 md:h-96 lg:h-[300px] flex items-center justify-center overflow-hidden invert dark:invert-0">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-white/20 dark:bg-white/10 blur-3xl rounded-full" />
                    <ASCIIText
                        key={rerender ? "rerendered" : "initial"}
                        text="Repurposed Laptop"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>
                <div className="flex justify-center">
                    <div className="scale-50 lg:scale-100">
                        <Stack
                            randomRotation={false}
                            sensitivity={180}
                            sendToBackOnClick={true}
                            cardDimensions={{ width: 500, height: 500 }}
                            cardsData={images}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 pt-12 px-8">
                    This is a physically damaged laptop I disassembled and set up as a Linux server.
                    I've used it to experiment with Docker, SSH, the API for my Granada project, and
                    even to host a Minecraft server.
                </div>
                <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 px-8 pt-4 pb-24">
                    <NavButtons />
                </div>
            </div>
        </div>
    );
}
