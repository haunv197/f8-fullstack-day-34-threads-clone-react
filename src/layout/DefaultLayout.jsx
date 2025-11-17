import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div className="mt-(--header-mobile) bg-gray-50 md:mt-0 md:px-5">
      <header className="md:fixed md:left-2 md:h-full">
        <Navigation />
      </header>

      <main className="md:mx-auto md:max-w-(--width-main) lg:max-w-160">
        <div className="hidden h-15 items-center justify-center gap-2 md:flex">
          <Link to="/for_you" className="p-2 font-semibold">
            Dành cho bạn
          </Link>
          <Button
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white p-0 hover:bg-transparent"
            title="Xem thêm"
          >
            <svg className="h-3 w-3 fill-black" role="img" viewBox="0 0 13 12">
              <path
                className="start-1.5 stroke-black"
                d="m2.5 4.2 4 4 4-4"
                fill="none"
              ></path>
            </svg>
          </Button>
        </div>

        <div className="h-full bg-white md:rounded-4xl md:border md:border-[#d5d5d5]">
          <Outlet />
        </div>
      </main>

      <footer>{/* Footer */}</footer>
    </div>
  );
};

export default DefaultLayout;
