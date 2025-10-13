import Home from "./Home";
import Portfolio from "./Portfolio";
import Test from "./Test";
import Projects from "./Projects";

const pages = [
    // about me
    {
        path: "/",
        title: "Home",
        component: Home,
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
