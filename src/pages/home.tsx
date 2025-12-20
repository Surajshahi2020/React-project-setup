
export default function HomePage() {

  return (
    <div className="space-y-12 p-6">
      
      {/* Hero Section */}
      <section className="rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">
          Welcome to GameHub 🎮
        </h1>
        <p className="max-w-xl text-blue-100">
          Discover games, manage favorites, and explore off-market deals —
          all in one place.
        </p>
      </section>


      {/* Features List (Long Content) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Platform Features
        </h2>

        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Feature #{index + 1}
            </h3>
            <p className="mt-2 text-gray-600">
              This is a sample feature description. It exists only to
              create vertical content so you can test scrolling behavior
              inside your layout.
            </p>
          </div>
        ))}
      </section>

      {/* Final Section */}
      <section className="rounded-xl bg-blue-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          End of Content
        </h2>
        <p className="mt-2 text-gray-600">
          If you see this section and the footer below it, scrolling is working correctly ✅
        </p>
      </section>
    </div>
  );
}


