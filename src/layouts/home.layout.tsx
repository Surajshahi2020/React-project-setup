import { Outlet } from "react-router-dom";

import Navbar from "../components/app/navbar";
import Footer from "../components/app/footer";
import Sidebar from "../components/app/sidebar";

import { useAutoScroll } from "../hooks/useAutoScroll";

export default function HomeLayout() {
  const scrollRef = useAutoScroll();

  return (
    <div className="flex h-screen overflow-hidden">

      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex h-full w-full flex-col overflow-x-hidden">
        <Navbar />

        <div
          ref={scrollRef}
          className="flex flex-grow flex-col overflow-y-auto overflow-x-clip"
        >

          <div className="flex-grow">
            <Outlet />
          </div>
          
          <Footer />
        </div>

      </div>

    </div>
  );
}

