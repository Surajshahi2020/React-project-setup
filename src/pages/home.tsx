import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Your React App!</h1>

      <p>Click the button to test state:</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Count: {count}
      </button>
    </div>
  );
}



