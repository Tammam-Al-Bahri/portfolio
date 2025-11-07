import ASCIIText from "@/components/ASCIIText";
import ShinyText from "@/components/ShinyText";
import Stack from "@/components/Stack";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Cpu, FileText, Flag } from "lucide-react";
import { useState, useEffect } from "react";
import uniTsk1 from "/images/projects/university-projects/tsk-collaborator-editing-subtask.jpg";
import uniTsk2 from "/images/projects/university-projects/tsk-home.jpg";
import uniTsk3 from "/images/projects/university-projects/tsk-managing-invites.jpg";
import NavButtons from "@/components/NavButtons";

export default function UniversityProjects() {
    const images = [
        { id: 2, img: uniTsk2 },
        { id: 3, img: uniTsk3 },
        { id: 1, img: uniTsk1 },
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
                        text="University Projects"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>

                <div className="flex flex-col">
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
                <div className="flex justify-between w-full max-w-5xl mx-auto mt-4 px-6 pt-24 pb-24">
                    <NavButtons />
                </div>
            </div>
        </div>
    );
}
