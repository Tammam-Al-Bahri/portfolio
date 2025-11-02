import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import pages from "./pages";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";

function Layout() {
    return (
        <SidebarProvider>
            <div>
                <div className="flex fixed z-50">
                    <AppSidebar />
                    <div className="pt-2 pl-1 lg:pl-2">
                        <SidebarTrigger className="lg:scale-150" />
                    </div>
                </div>
                <main>
                    <div>
                        <ClickSpark
                            sparkColor="#00ff00"
                            sparkSize={100}
                            sparkRadius={150}
                            sparkCount={1}
                            duration={400}
                            easing="ease-out"
                            extraScale={10}
                        >
                            <Outlet />
                        </ClickSpark>
                    </div>
                    <Footer />
                </main>
            </div>
        </SidebarProvider>
    );
}

function App() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route element={<Layout />}>
                    {pages.map(({ path, component: Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
