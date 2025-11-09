import { Outlet } from "react-router";
import Navigation from "./Navigation";

const DefaultLayout = () => {
  return (
    <div className="px-5">
      <header className="fixed left-2 h-full">
        <Navigation />
      </header>

      <main className="mx-auto h-full w-159.5 rounded-4xl border border-[#d5d5d5]">
        <Outlet />
      </main>

      <footer>{/* Footer */}</footer>
    </div>
  );
};

export default DefaultLayout;
