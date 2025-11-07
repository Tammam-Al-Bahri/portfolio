import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import pages, { getPageIndex } from "@/pages";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NavButtons() {
    const navigate = useNavigate();

    const pageIndex: number = getPageIndex();
    return (
        <>
            {pageIndex > 0 ? (
                <Button
                    variant="outline"
                    onClick={() => navigate(pages[pageIndex - 1].path)}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft />
                    {pages[pageIndex - 1].title}
                </Button>
            ) : (
                <></>
            )}

            {pageIndex < pages.length - 1 ? (
                <Button
                    variant="outline"
                    onClick={() => navigate(pages[pageIndex + 1].path)}
                    className="flex items-center gap-2"
                >
                    {pages[pageIndex + 1].title}
                    <ArrowRight />
                </Button>
            ) : (
                <></>
            )}
        </>
    );
}
