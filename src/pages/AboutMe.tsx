import CircularText from "@/components/CircularText";
import LightRays from "@/components/LightRays";
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
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center gap-2">
                <div className="relative flex items-center justify-center">
                    <CircularText
                        text="<> </> <> </> <> </> <> </> "
                        onHover="slowDown"
                        spinDuration={100}
                        className="invert dark:invert-0"
                    />
                    <img
                        src={"/portfolio/images/me.jpg"}
                        className="absolute w-32 h-32 rounded-full"
                    />
                </div>
                <h1 className="text-4xl">Tammam Al Bahri</h1>
                <TextType
                    text={text}
                    typingSpeed={60}
                    pauseDuration={2000}
                    showCursor={true}
                    cursorCharacter="|"
                    className="invert dark:invert-0"
                />
            </div>
        </div>
    );
}
