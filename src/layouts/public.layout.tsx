import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/app/navbar";
import Footer from "../components/app/footer";
import Loading from "../components/reusable/loading";

import { useAuthStore } from "../stores/auth";
import { useAutoScroll } from "../hooks/useAutoScroll";

interface IHomeLayoutProps {
  showNavbarFooter?: boolean;
  showNavbarLogo?: boolean; // new prop to control logo
}

export default function HomeLayout({
  showNavbarFooter = true,
  showNavbarLogo = true, // default to true
}: IHomeLayoutProps) {
  const scrollRef = useAutoScroll();
  const navigate = useNavigate();

  const { user, getSession, loading } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await getSession();
      setIsChecking(false);
    };
    checkAuth();
  }, [getSession]);

  useEffect(() => {
    if (!isChecking && !user) {
      navigate("/login");
    }
  }, [user, isChecking, navigate]);

  if (isChecking || loading) {
    return (
      <div className="flex h-screen items-center justify-center text-primary">
        <Loading width={64} height={64} />
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden overflow-x-clip">
      {/* Navbar with optional logo */}
      {showNavbarFooter && <Navbar showLogo={showNavbarLogo} />}

      {/* Main content */}
      <div
        ref={scrollRef}
        className="flex flex-grow flex-col overflow-y-auto overflow-x-clip"
      >
        <div className="flex-grow px-3">
          <Outlet />
        </div>

        {showNavbarFooter && <Footer />}
      </div>
    </div>
  );
}
