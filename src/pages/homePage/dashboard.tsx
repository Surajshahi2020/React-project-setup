import { useAuthStore } from "../../stores/auth";
import Button from "../../components/reusable/Button";

const games = [
  {
    id: "PM_387",
    name: "Panda Master",
    balance: "1000.00 SC",
    status: "Active",
  },
  {
    id: "DR_219",
    name: "Dragon Reels",
    balance: "750.00 SC",
    status: "Active",
  },
  {
    id: "TJ_102",
    name: "Tiger Jackpot",
    balance: "520.00 SC",
    status: "Inactive",
  },
];

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return (
      <p className="text-red-500 text-center mt-10">
        You are not logged in
      </p>
    );
  }

  return (
    // ✅ BLACK BACKGROUND
    <div className="p-2 md:p-3 bg-black text-white">

      {/* WELCOME BANNER */}
      <div className="bg-gradient-to-r from-green-200 to-green-100 text-black rounded-xl p-4 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold uppercase">
            Welcome to Skyline Casino
          </h1>
          <p className="mt-1 text-sm">
            Get 20% bonus on your first deposit
          </p>
        </div>

        <img
          src="/panda.png"
          alt="Panda"
          className="h-24 hidden md:block"
        />
      </div>

      {/* GAMES */}
      <section className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-base font-semibold">Your Games</h2>

          <Button size="small" className="success">
            + Add Games
          </Button>
        </div>

        {/* ✅ 3 GAMES LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-[#0f172a] rounded-xl p-3 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{game.name}</h3>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded ${
                    game.status === "Active"
                      ? "bg-green-600"
                      : "bg-gray-600"
                  }`}
                >
                  {game.status}
                </span>
              </div>

              <div className="mt-2 text-green-400 font-semibold text-sm">
                {game.balance}
              </div>

              <div className="mt-1 text-xs text-white/60">
                Game ID: {game.id}
              </div>

              <div className="flex gap-2 mt-2">
                <Button size="small" className="success" block>
                  Add Credit
                </Button>
                <Button size="small" className="secondary" block>
                  Withdraw
                </Button>
              </div>

              <Button size="small" className="warning mt-2" block>
                Play Now
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
