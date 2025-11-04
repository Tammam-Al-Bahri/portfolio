import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Portfolio from "./projects/Portfolio";
import Skills from "./Skills";
import Granada from "./projects/Granada";
import UniversityProjects from "./projects/UniversityProjects";
import Frank from "./projects/Frank";
import NFTScanner from "./projects/NFTScanner";

const pages = [
    // about me
    {
        path: "/",
        title: "About Me",
        component: AboutMe,
    },
    {
        path: "/skills",
        title: "Skills",
        component: Skills,
    },
    {
        path: "/projects",
        title: "Projects",
        component: Projects,
    },
    // projects
    {
        path: "/projects/granada",
        title: "Granada PMS",
        component: Granada,
    },
    {
        path: "/projects/portfolio",
        title: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/projects/university-projects",
        title: "University Projects",
        component: UniversityProjects,
    },
    {
        path: "/projects/frank",
        title: "Frank",
        component: Frank,
    },
    {
        path: "/projects/nft-scanner",
        title: "NFT Scanner",
        component: NFTScanner,
    },
] as const;

export default pages;

export type Pages = (typeof pages)[number];
