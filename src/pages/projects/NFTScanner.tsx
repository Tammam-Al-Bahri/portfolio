import ASCIIText from "@/components/ASCIIText";
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
import { FileText, Flag, Cpu, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import nftScanner1 from "/images/projects/nft-scanner/lootboxes-with-weapon-data-json-screenshot.jpg";
import nftScanner2 from "/images/projects/nft-scanner/console-get-all-mint-addresses-js.jpg";
import nftScanner3 from "/images/projects/nft-scanner/console-scanner-js.jpg";
import nftScanner4 from "/images/projects/nft-scanner/wallet-confirm-lootbox-open.jpg";
import ElectricBorder from "@/components/ElectricBorder";
import NavButtons from "@/components/NavButtons";

export default function NFTScanner() {
    const images = [
        { id: 4, img: nftScanner4 },
        { id: 3, img: nftScanner3 },
        { id: 2, img: nftScanner2 },
        { id: 1, img: nftScanner1 },
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
                        text="NFT Scanner"
                        enableWaves={false}
                        asciiFontSize={8}
                    />
                </div>
                <div className="flex flex-col gap-6">
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
                                    href="https://github.com/Tammam-Al-Bahri/br1-lootbox-scanner"
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
                            <AccordionContent className="px-6 text-lg text-card-foreground">
                                <p>
                                    A simple browser based utility that scans{" "}
                                    <a
                                        href="https://www.br1game.com/"
                                        target="_blank"
                                        className="font-bold underline"
                                    >
                                        BR1 Infinite
                                    </a>{" "}
                                    <a
                                        href="https://magiceden.io/marketplace/br1_loot_boxes"
                                        target="_blank"
                                        className="italic underline"
                                    >
                                        lootboxes
                                    </a>{" "}
                                    and extracts their weapon IDs and metadata, including rarities,
                                    directly from the game website's API - no Node.js, no setup,
                                    runs straight in browser DevTools.
                                </p>
                                <p className="pt-4">Consists of two small JS scripts:</p>
                                <ul className="list-disc px-6 py-2">
                                    <li>
                                        <code>scanner.js</code> — fetches lootbox contents and
                                        weapon rarity and exports JSON
                                    </li>
                                    <li>
                                        <code>getAllMintAddresses.js</code> — grabs all NFT mint
                                        addresses from Solana collection via Helius API
                                    </li>
                                </ul>
                                <p className="pt-4">
                                    The result is a JSON file with the entire remaining lootbox
                                    collection (2553 addresses), each with the IDs and rarities of
                                    its 3 weapons. Now anyone can use this to find or buy listed
                                    lootboxes with rare contents.
                                </p>
                                <p className="pt-4">
                                    <strong>Update: </strong>I have used this for the new
                                    collection, found the lootbox containing the rare skin with the
                                    bounty, and informed the team of a visual bug which they were
                                    thankful for and have now fixed.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Flag size={16} />
                                    Challenges and Takeaways
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-lg text-card-foreground">
                                <p className="pb-4">
                                    I first realised it might be possible to see lootbox contents
                                    before opening them as when you click the <em>open</em> button
                                    on the BR1 site, the connected wallet already shows exactly what
                                    you'll receive <em>before</em> you approve the transaction, and
                                    it's always the same balance change.
                                </p>
                                <p className="pb-4">
                                    That got me curious, especially since they are dropping a new
                                    lootbox collection with a cash bounty on a rare skin, so I did
                                    some quick reverse engineering.
                                </p>
                                <p className="pb-4">
                                    Using the Network tab in DevTools, I found the{" "}
                                    <code>/api/lootbox/open</code> endpoint, which returns the
                                    weapon IDs for a given lootbox mint address. Then, by checking a{" "}
                                    <a
                                        href="https://solscan.io/token/9mjeJbsPhMDTVLisAkjtHT3gGfUo7BrxTbAkPNWBjNC7#metadata"
                                        target="_blank"
                                        className="underline"
                                    >
                                        weapon's NFT metadata
                                    </a>{" "}
                                    on a Solana explorer, I discovered the{" "}
                                    <a
                                        href="https://assets.bravoready.com/br1-infinite/weapons/7151.json"
                                        target="_blank"
                                        className="underline"
                                    >
                                        endpoint
                                    </a>{" "}
                                    with the weapon data.
                                </p>
                                <p className="py-4">
                                    I attempted to write a Python script first, but the main issue
                                    was CORS. This was solved by running everything directly in
                                    DevTools on{" "}
                                    <a
                                        href="https://www.br1game.com"
                                        target="_blank"
                                        className="underline"
                                    >
                                        br1game.com
                                    </a>
                                    , so requests came from an allowed origin.
                                </p>
                                <p className="py-4">
                                    I had to map lootbox data with weapon metadata manually and log
                                    progress in console. I kept it minimal - no libraries, just{" "}
                                    <code>fetch()</code>.
                                </p>
                                <p className="py-4">
                                    I learned how to work with Solana NFT data and the{" "}
                                    <a
                                        href="https://www.helius.dev/"
                                        target="_blank"
                                        className="underline"
                                    >
                                        Helius
                                    </a>{" "}
                                    API.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="px-8 border-dashed">
                            <AccordionTrigger>
                                <div className="flex gap-2 items-center font-bold">
                                    <Cpu size={16} />
                                    Technologies Used
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 text-lg text-card-foreground">
                                <ul className="py-4 px-4 text-lg list-disc">
                                    <li className="pt-2">
                                        <ShinyText
                                            text="JavaScript"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - browser-only scripts using <code>fetch()</code> and async
                                        functions for direct API calls
                                    </li>
                                    <li className="pt-2">
                                        <ShinyText
                                            text="Helius API"
                                            disabled={false}
                                            speed={4}
                                            className="invert dark:invert-0 font-bold text-xl"
                                        />{" "}
                                        - to pull all mint addresses from a Solana NFT collection
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
