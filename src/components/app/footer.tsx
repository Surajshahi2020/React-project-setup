import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex h-16 items-center justify-between border-t px-6 bg-gray-100 text-gray-700">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
