import { AppSidebar } from "./components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import pages from "./pages";

function Layout() {
    return (
        <SidebarProvider>
            <div className="flex w-full overflow-x-hidden">
                <AppSidebar />
                <main className="flex-1 overflow-y-auto">
                    <SidebarTrigger />
                    <Outlet />
                    {/* FOOTER */}
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
