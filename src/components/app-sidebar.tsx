import {
    Bot,
    Brain,
    BriefcaseBusiness,
    Folders,
    Paperclip,
    PersonStanding,
    SearchCode,
    University,
    type LucideProps,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { type Pages } from "@/pages";
import { ThemeToggle } from "./theme-toggle";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import GradientText from "./GradientText";

type MenuItem = {
    [P in Pages as P["title"]]: {
        title: P["title"];
        path: P["path"];
        icon: React.ForwardRefExoticComponent<
            Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
        >;
    };
}[Pages["title"]];

const aboutMeItems: MenuItem[] = [
    {
        title: "About Me",
        path: "/",
        icon: PersonStanding,
    },
    {
        title: "Skills",
        path: "/skills",
        icon: Brain,
    },
    {
        title: "Projects",
        path: "/projects",
        icon: Folders,
    },
];

const projectItems: MenuItem[] = [
    {
        title: "Granada",
        path: "/projects/granada",
        icon: BriefcaseBusiness,
    },
    {
        title: "Portfolio",
        path: "/projects/portfolio",
        icon: Paperclip,
    },
    {
        path: "/projects/nft-scanner",
        title: "NFT Scanner",
        icon: SearchCode,
    },
    {
        path: "/projects/university-projects",
        title: "University Projects",
        icon: University,
    },
    {
        path: "/projects/frank",
        title: "Frank",
        icon: Bot,
    },
];

export function AppSidebar() {
    const navigate = useNavigate();
    const sidebar = useSidebar();
    return (
        <Sidebar variant="floating" className="z-50">
            <SidebarHeader>
                <GradientText
                    colors={["#078000", "#259463", "#269693", "#078000"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="px-2"
                >
                    Tammam Al Bahri
                </GradientText>
            </SidebarHeader>
            <SidebarContent className="shadow-2xl">
                <SidebarGroup>
                    <SidebarGroupLabel>About Me</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {aboutMeItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => (
                                            navigate(item.path, { replace: true }),
                                            sidebar.isMobile ? sidebar.toggleSidebar() : null
                                        )}
                                    >
                                        <div className="select-none">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {projectItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        onClick={() => (
                                            navigate(item.path, { replace: true }),
                                            sidebar.isMobile ? sidebar.toggleSidebar() : null
                                        )}
                                    >
                                        <div className="select-none">
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        asChild
                        onClick={() => (
                            navigate("/test", { replace: true }),
                            sidebar.isMobile ? sidebar.toggleSidebar() : null
                        )}
                    ></SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarFooter className="fixed bottom-2">
                    <ThemeToggle />
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    );
}
