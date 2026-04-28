import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { useEffect } from "react";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Header className={location.pathname === "/project" ? "shadow-md" : ""} />
      <main className="w-full flex-1 max-w-[1280px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
