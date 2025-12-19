import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../stores/auth";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useAuthStore((state) => state.user);

  // Sidebar menu items
  const sidebarItems = [
    { name: "Games", icon: "🎮", link: "/games" },
    { name: "Favorites", icon: "⭐", link: "/games/favorites", requiredAuth: true },
    { name: "Profile", icon: "👤", link: "/profile", requiredAuth: true },
    { name: "Off-market Games", icon: "🏆", link: "/off-market-games" },
  ];

  // Filter items based on authentication
  const finalSidebarItems = sidebarItems.filter((item) =>
    item.requiredAuth ? !!user : true
  );

  // Logout function
  const logoutUser = () => {
    // Clear user from Zustand store
    useAuthStore.setState({ user: null, token: null });
    navigate("/");
  };

  return (
    <aside className="flex h-full w-64 flex-shrink-0 flex-col bg-blue-900 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center p-4">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" width={100} />
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex flex-col flex-1 gap-1 overflow-y-auto px-2 py-4">
        {finalSidebarItems.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link key={index} to={item.link}>
              <div
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 cursor-pointer
                  ${isActive ? "bg-blue-700 font-semibold" : "hover:bg-blue-800"}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      {user && (
        <div className="p-4">
          <button
            className="flex w-full items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-white transition-colors duration-200 hover:bg-red-700"
            onClick={logoutUser}
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      )}
    </aside>
  );
}
