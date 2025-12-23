import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../reusable/Button";
import { useAuthStore } from "../../stores/auth";
import LoggedInNavbar from "./LoggedInNavbar";

interface NavbarProps {
  showLogo?: boolean;
}

export default function Navbar({ showLogo = false }: NavbarProps) {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    navigate("/");
    setIsLoggingOut(false);
  };

  if (user) return <LoggedInNavbar />;
  

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-950 border-b border-blue-800 shadow-xl">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        {/* Left: Logo if showLogo is true */}
        <div className="flex items-center">
          {showLogo && (
            <Link to="/" className="flex items-center">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
          )}
        </div>

        {/* Right: always sticks to right */}
        <div className="flex items-center gap-4 ml-auto">
          {user ? (
            <>
              {/* User info */}
              <div className="flex items-center gap-3 rounded-lg border border-blue-700 bg-blue-800/50 px-4 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-bold text-white">
                  {user}
                </div>
                <span className="font-medium text-white">{user}</span>
              </div>

              {/* Logout button */}
              <Button
                onClick={handleLogout}
                variant="danger"
                size="medium"
                rounded="medium"
                isLoading={isLoggingOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* Login button */}
              <Button
                size="small"
                variant="primary"
                rounded="medium"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              {/* Register button */}
              <Button
                size="small"
                variant="primary"
                rounded="medium"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
