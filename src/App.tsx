import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import pages from "./pages";
import Footer from "./components/Footer";

function Layout() {
    return (
        <SidebarProvider>
            <div>
                <div className="flex fixed z-50">
                    <AppSidebar />
                    <div className="pt-2 pl-1">
                        <SidebarTrigger />
                    </div>
                </div>
                <main>
                    <div>
                        <Outlet />
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
