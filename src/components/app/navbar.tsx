import { Link, useNavigate } from "react-router-dom";
import Button from "../reusable/button";
import { useAuthStore } from "../../stores/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="logo" className="w-24 h-auto" />
          <span className="text-xl font-bold text-gray-900">GameHub</span>
        </Link>

        {/* Right Side */}
        {user ? (
          <Link
            to="/profile"
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
          >
            <span>{user.name}</span>
          </Link>
        ) : (
          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
