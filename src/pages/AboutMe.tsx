import CircularText from "@/components/CircularText";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";
import GradientText from "@/components/GradientText";
import LightRays from "@/components/LightRays";
import ShinyText from "@/components/ShinyText";
import TextType from "@/components/TextType";
import { useTheme } from "@/components/theme-provider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
        "avoids merge conflicts",
    ];
    const { theme } = useTheme();
    return (
        <div className="relative overflow-auto w-screen h-screen">
            {theme == "light" ? (
                <div className="relative overflow-auto w-screen h-screen invert blur-sm">
                    <FaultyTerminal
                        scale={1.5}
                        gridMul={[1, 1]}
                        digitSize={1.2}
                        timeScale={0.05}
                        pause={false}
                        scanlineIntensity={0.5}
                        glitchAmount={2}
                        flickerAmount={1}
                        noiseAmp={1}
                        chromaticAberration={0}
                        dither={1}
                        curvature={7}
                        tint="#ffc2f5"
                        mouseReact={true}
                        mouseStrength={0.5}
                        pageLoadAnimation={false}
                        brightness={1}
                    />
                </div>
            ) : (
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
                    className="invert dark:invert-0"
                />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-6">
                <GlassSurface
                    width={250}
                    height={250}
                    borderRadius={360}
                    displace={0.8}
                    saturation={0.8}
                    borderWidth={0.3}
                >
                    <div className="relative flex items-center justify-center text-muted-foreground">
                        <CircularText
                            text={"<> </> <> </> <> </> <> </> "}
                            onHover="slowDown"
                            spinDuration={300}
                            className="font-mono scale-125"
                        />
                        <img
                            src={"/portfolio/images/me.jpg"}
                            className="absolute w-40 h-40 rounded-full"
                        />
                    </div>
                </GlassSurface>
                <Card className="m-4 shadow-2xl">
                    <CardHeader>
                        <div>
                            <GradientText
                                colors={
                                    theme == "light"
                                        ? ["#06a600", "#03999c", "#00782c", "#03999c", "#06a600"]
                                        : ["#0dff00", "#40ffaa", "#40ffb6", "#0dff00"]
                                }
                                animationSpeed={10}
                                showBorder={false}
                                className="text-3xl lg:text-5xl px-2"
                            >
                                Tammam Al Bahri
                            </GradientText>
                        </div>
                        <div className="text-left ml-12 text-muted-foreground font-mono text-sm lg:text-2xl">
                            <span>{"> "}</span>
                            <TextType
                                text={text}
                                typingSpeed={60}
                                pauseDuration={2000}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="max-w-lg mt-4 px-16 text-center text-sm text-muted-foreground leading-relaxed lg:text-2xl">
                        <div>
                            <ShinyText
                                text="Software Engineering"
                                disabled={false}
                                speed={4}
                                className="invert dark:invert-0 font-bold"
                            />{" "}
                            student at Sheffield Hallam University.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
