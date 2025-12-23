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
    <div className="fixed w-[1017px] h-fit top-[100px] left-[366px] flex flex-col gap-[24px] p-0 bg-black text-white">
      
      {/* WELCOME BANNER */}
      <div className="w-full bg-gradient-to-r from-green-200 to-green-100 text-black rounded-xl p-4 flex items-center justify-between">
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

      {/* GAMES SECTION */}
      <section className="w-full flex flex-col gap-4">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <h2 className="text-base font-semibold">Your Games</h2>
          <Button size="small" className="success">
            + Add Games
          </Button>
        </div>

        {/* GAMES GRID - 3 columns */}
        <div className="w-full grid grid-cols-3 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="w-full bg-[#0f172a] rounded-xl p-4 border border-white/10 flex flex-col"
            >
              {/* Game Header */}
              <div className="w-full flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">{game.name}</h3>
                <span
                  className={`text-[10px] px-2 py-1 rounded font-medium ${
                    game.status === "Active"
                      ? "bg-green-600"
                      : "bg-gray-600"
                  }`}
                >
                  {game.status}
                </span>
              </div>

              {/* Balance & ID */}
              <div className="w-full mb-2">
                <div className="text-green-400 font-semibold text-lg">
                  {game.balance}
                </div>
                <div className="text-xs text-white/60 mt-1">
                  Game ID: {game.id}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex gap-2 mt-2">
                <Button size="small" className="success" block>
                  Add Credit
                </Button>
                <Button size="small" className="secondary" block>
                  Withdraw
                </Button>
              </div>

              {/* Play Button */}
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