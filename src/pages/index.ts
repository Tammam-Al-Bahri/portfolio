import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Portfolio from "./Portfolio";
import Test from "./Test";
import Skills from "./Skills";

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
        path: "/projects/portfolio",
        title: "Portfolio",
        component: Portfolio,
    },
    // temporary page to test stuff
    {
        path: "/test",
        title: "Test",
        component: Test,
    },
] as const;

export default pages;

export type Pages = (typeof pages)[number];
