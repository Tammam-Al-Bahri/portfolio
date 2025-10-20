import CircularText from "@/components/CircularText";
import GlassSurface from "@/components/GlassSurface";
import GradientText from "@/components/GradientText";
import LightRays from "@/components/LightRays";
import ShinyText from "@/components/ShinyText";
import TextType from "@/components/TextType";

export default function AboutMe() {
    const text = [
        "loves clean code",
        "manages dependencies",
        "thrives in vscode",
        "validates with zod",
        "runs linux on old hardware",
        "appreciates pnpm",
        "writes scalable code",
        "prefers dark mode",
        "believes in open source",
        "lives in a docker container",
        "lets prisma handle the sql",
        "hashes with bcrypt",
        "doesn't reinvent buttons",
        "does typing tests for fun",
        "pushes to main at 3 am",
    ];
    return (
        <div className="relative overflow-auto w-screen h-screen">
            <LightRays
                raysOrigin="top-center"
                raysColor="#f4e99b"
                raysSpeed={0.4}
                lightSpread={0.2}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.025}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays invert dark:invert-0"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center gap-6">
                <GlassSurface width={250} height={250} borderRadius={360}>
                    <div className="relative flex items-center justify-center text-muted-foreground">
                        <CircularText
                            text="<> </> <> </> <> </> <> </> "
                            onHover="slowDown"
                            spinDuration={100}
                            className="font-mono scale-125"
                        />
                        <img
                            src={"/portfolio/images/me.jpg"}
                            className="absolute w-40 h-40 rounded-full"
                        />
                    </div>
                </GlassSurface>
                <div>
                    <div>
                        <div>
                            <GradientText
                                colors={["#0dff00", "#40ffaa", "#40ffb6", "#0dff00"]}
                                animationSpeed={10}
                                showBorder={false}
                                className="text-3xl lg:text-5xl p-2"
                            >
                                Tammam Al Bahri
                            </GradientText>
                        </div>
                        <div className="text-left ml-32">
                            <TextType
                                text={text}
                                typingSpeed={60}
                                pauseDuration={2000}
                                showCursor={true}
                                cursorCharacter="|"
                                className="text-muted-foreground font-mono lg:text-2xl"
                            />
                        </div>
                    </div>
                    <div className="max-w-lg mt-6 px-16 text-sm text-muted-foreground leading-relaxed lg:text-2xl">
                        <div>
                            <ShinyText
                                text="Software Engineering"
                                disabled={false}
                                speed={4}
                                className="invert dark:invert-0 font-bold"
                            />{" "}
                            student at Sheffield Hallam University.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
