import ASCIIText from "@/components/ASCIIText";
import ElectricBorder from "@/components/ElectricBorder";
import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import Stack from "@/components/Stack";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cpu, ExternalLink, FileText, Flag } from "lucide-react";
import { useState, useEffect } from "react";
import granada1 from "/images/projects/granada/app-and-docker.jpg";
import NavButtons from "@/components/NavButtons";

export default function Granada() {
    const images = [{ id: 1, img: granada1 }];
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
                        text="Granada"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <div className="scale-60 lg:scale-100">
                            <Stack
                                randomRotation={false}
                                sensitivity={180}
                                sendToBackOnClick={true}
                                cardDimensions={{ width: 500, height: 500 }}
                                cardsData={images}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 px-6 pt-4">
                        <ElectricBorder
                            color="#27e676"
                            speed={2}
                            chaos={0.5}
                            thickness={2}
                            className="rounded-xl p-1"
                        >
                            <Button variant={"outline"}>
                                <a
                                    href="https://github.com/Tammam-Al-Bahri/granada-monorepo"
                                    target="_blank"
                                    className="text-xl flex items-center"
                                >
                                    <GradientText
                                        colors={["#078000", "#259463", "#269693", "#078000"]}
                                        animationSpeed={10}
                                        showBorder={false}
                                        className="px-2"
                                    >
                                        code
                                    </GradientText>
                                    <ExternalLink />
                                </a>
                            </Button>
                        </ElectricBorder>
                    </div>
                    <Accordion type="multiple">
                        <AccordionItem value="item-1" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <FileText size={16} />
                                    Overview
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-card-foreground">
                                <p>**UPDATE**</p>
                                <p className="pt-4">**UPDATE**</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Flag size={16} />
                                    Challenges and Takeaways
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-card-foreground">
                                <p className="pb-4">**UPDATE**</p>
                                <p className="pb-4">**UPDATE**</p>
                                <p className="pb-4">**UPDATE**</p>
                                <p className="py-4">**UPDATE**</p>
                                <p className="py-4">**UPDATE**</p>
                                <p className="py-4">**UPDATE**</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Cpu size={16} />
                                    Technologies Used
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-card-foreground">
                                <ul className="py-4 px-4 text-lg list-disc">
                                    <li className="pt-2">
                                        <ShinyText
                                            text="**UPDATE**"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - **UPDATE**
                                    </li>
                                    <li className="pt-2">
                                        <ShinyText
                                            text="**UPDATE**"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - **UPDATE**
                                    </li>
                                    <li className="pt-2">
                                        <ShinyText
                                            text="**UPDATE**"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - **UPDATE**
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 px-6 pt-4 pb-24">
                    <NavButtons />
                </div>
            </div>
        </div>
    );
}
