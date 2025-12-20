import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../reusable/button";
import { useAuthStore } from "../../stores/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout(); // optional async logout
    navigate("/");
    setIsLoggingOut(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-950 border-b border-blue-800 shadow-xl">
      <div className="mx-auto flex h-16 items-center justify-end px-6">
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* User info */}
              <div className="flex items-center gap-3 rounded-lg border border-blue-700 bg-blue-800/50 px-4 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-sm font-bold text-white">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="font-medium text-white">{user.name}</span>
              </div>

              {/* Logout button */}
              <Button
                onClick={handleLogout}
                variant="danger"    // red color
                size="medium"
                rounded="medium"
                isLoading={isLoggingOut} // shows spinner
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
                variant="primary"   // fixed variant
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
