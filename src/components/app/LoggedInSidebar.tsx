// components/LoggedInSidebar.tsx
import { IoLogOutOutline } from "react-icons/io5";
import { useAuthStore } from "../../stores/auth";

export default function LoggedInSidebar() {
  const logout = useAuthStore((state) => state.logout);

  const logoutUser = () => {
    logout();
  };

  return (
    <aside className="w-64 bg-[#111827] p-4 flex flex-col gap-4 h-full">
      <div className="text-xl font-bold mb-4">🐼 Skyline</div>

      <button className="sidebar-btn bg-blue-600">Sweepstakes</button>
      <button className="sidebar-btn bg-green-600">Purchase</button>
      <button className="sidebar-btn bg-orange-500">Cashout</button>
      <button className="sidebar-btn bg-pink-600">Transfer Funds</button>
      <button className="sidebar-btn bg-purple-600">Promotions</button>

      <div className="mt-auto space-y-2">
        <div className="bg-green-700 p-3 rounded-lg text-sm">
          🎁 Earn Bonus <br /> Free SC 100
        </div>
        <button
          onClick={logoutUser}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-3 bg-red-600 hover:bg-red-700 transition"
        >
          <IoLogOutOutline size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
