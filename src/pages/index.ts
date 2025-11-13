import Me from "./Me";
import Projects from "./Projects";
import Portfolio from "./projects/Portfolio";
import Skills from "./AboutMe";
import ProjectManager from "./projects/ProjectManager";
import UniversityProjects from "./projects/UniversityProjects";
import RepurposedLaptop from "./projects/RepurposedLaptop";
import NFTScanner from "./projects/NFTScanner";
import { useLocation } from "react-router-dom";

const pages = [
    {
        path: "/",
        title: "Me",
        component: Me,
    },
    {
        path: "/about-me",
        title: "About Me",
        component: Skills,
    },
    {
        path: "/projects",
        title: "Projects",
        component: Projects,
    },
    {
        path: "/projects/portfolio",
        title: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/projects/project-manager",
        title: "Project Manager",
        component: ProjectManager,
    },
    {
        path: "/projects/nft-scanner",
        title: "NFT Scanner",
        component: NFTScanner,
    },
    {
        path: "/projects/university-projects",
        title: "University Projects",
        component: UniversityProjects,
    },
    {
        path: "/projects/repurposed-laptop",
        title: "Repurposed Laptop",
        component: RepurposedLaptop,
    },
] as const;

export default pages;

export type Pages = (typeof pages)[number];

export function getPageIndex() {
    const location = useLocation();
    return pages.findIndex((page) => page.path == location.pathname);
}
