import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import pages from ".";
import { useNavigate } from "react-router-dom";
import ASCIIText from "@/components/ASCIIText";
import { useState, useEffect } from "react";

export default function Projects() {
    const navigate = useNavigate();
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRerender(true), 200);
        return () => clearTimeout(timer);
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

                <div className="flex flex-col gap-6 px-6">
                    <div className="flex justify-between w-full max-w-4xl mx-auto mt-4 pt-4 pb-8">
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
                            onClick={() => navigate(pages[3].path, { replace: true })}
                            className="flex items-center gap-2"
                        >
                            {pages[3].title}
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
