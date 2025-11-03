import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center justify-center pb-1 text-sm border-t bg-background select-none">
            <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <a
                        href="https://www.linkedin.com/in/tammam-al-bahri-7242ba2a9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a
                        href="https://github.com/Tammam-Al-Bahri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <SiGithub />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <a href="mailto:tammam.al.bahri20@gmail.com" aria-label="Email">
                        <SiGmail />
                    </a>
                </Button>
            </div>
            <p className="text-muted-foreground text-xs">
                &copy; {new Date().getFullYear()} Tammam Al Bahri
            </p>
        </footer>
    );
}
