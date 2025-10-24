import Stack from "@/components/Stack";
import me from "/images/me.jpg";

export default function Test() {
    const images = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
        },
        { id: 2, img: me },
    ];
    return (
        <div className="relative overflow-auto w-screen h-screen">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center gap-6">
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={true}
                    cardDimensions={{ width: 200, height: 200 }}
                    cardsData={images}
                />
            </div>
        </div>
    );
}
