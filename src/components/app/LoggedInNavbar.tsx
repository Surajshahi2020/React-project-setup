// components/Navbar.tsx
export default function LoggedInNavbar() {
  return (
    <header className="h-16 bg-[#0f172a] flex items-center justify-between px-6 border-b border-white/10">
      <div />

      <div className="flex items-center gap-4">
        <div className="bg-green-700 px-4 py-1 rounded-full font-semibold">
          1000.00 SC
        </div>

        <button className="bg-yellow-500 text-black px-3 py-1 rounded-md">
          +
        </button>

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/32"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">yourUsername01</span>
        </div>
      </div>
    </header>
  );
}
