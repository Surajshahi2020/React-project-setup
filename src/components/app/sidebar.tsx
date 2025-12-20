import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaStar, FaTrophy, FaUser } from "react-icons/fa";
import { IoGameController, IoLogOutOutline } from "react-icons/io5";
import { useAuthStore } from "../../stores/auth";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const logoutUser = () => {
    logout();
    navigate("/");
  };
  const sidebarItems = [
    {
      name: "Games",
      icon: <IoGameController size={20} />,
      link: "/games"
    },
    {
      name: "Favorite",
      icon: <FaStar size={20} />,
      link: "/games/favorites",
      requiredAuth: true,
    },
    {
      name: "Profile",
      icon: <FaUser size={20} />,
      link: "/profile",
      requiredAuth: true,
    },
    {
      name: "Off-market Games",
      icon: <FaTrophy size={20} />,
      link: "/off-market-games",
    },
  ];
  const finalSidebarItems = sidebarItems.filter((item) =>
    item.requiredAuth ? !!user : true
  );
  return (
    <aside className="h-full w-72 flex-shrink-0 flex-col bg-gradient-to-b from-blue-900 to-blue-950 text-white shadow-xl">
      {/* Header with logo */}
      <div className="flex h-16 items-center px-6 border-blue-800">
        <Link to="/" className="flex h-full items-center">
          <img src="/images/logo.png" alt="logo" width={100} />
        </Link>
      </div>

      {/* Menu items */}
      <nav className="flex-grow overflow-y-auto px-3 py-6 space-y-1">
        {finalSidebarItems.map((item, index) => {
          const isActive = location.pathname === item.link;

          return (
            <Link key={index} to={item.link}>
              <div
                className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-200
                  ${isActive ? "bg-blue-700 border-l-4 border-white" : "hover:bg-blue-800"}`}
              >
                <span className="w-6 flex justify-center">{item.icon}</span>
                <span className="font-light">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      {user && (
        <div className="border-t border-blue-800 p-3">
          <button
            onClick={logoutUser}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 bg-red-600 hover:bg-red-700 transition"
          >
            <IoLogOutOutline size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </aside>
  );
}
