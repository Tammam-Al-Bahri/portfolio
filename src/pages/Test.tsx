import LightRays from "@/components/LightRays";

export default function Test() {
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
        </div>
    );
}
