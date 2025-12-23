import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/auth"; // adjust path if needed
import LoggedInFooter from "./LoggedInFooter";

// Social Media Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const user = useAuthStore((state) => state.user);

  if (user) return <LoggedInFooter/>;
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-xl border-t border-blue-800">
      <div className="px-3 md:px-5 lg:px-7">
        <div className="mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
          <div className="grid w-full grid-cols-2 gap-x-3 gap-y-8 text-sm md:grid-cols-4">
            {/* GAMES Section */}
            <div className="space-y-4">
              <h3 className="uppercase tracking-wider text-lg font-bold text-blue-300 mb-3">GAMES</h3>
              <ul className="space-y-2">
                {["Animals", "Crash Games", "Holidays", "Joker"].map((game) => (
                  <li key={game}>
                    <Link 
                      to={`/games?category=${game.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{game}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT Section */}
            <div className="space-y-4">
              <h3 className="uppercase tracking-wider text-lg font-bold text-blue-300 mb-3">SUPPORT</h3>
              <ul className="space-y-2">
                {[
                  { name: "About us", path: "/about" },
                  { name: "Contact", path: "/contact" },
                  { name: "FAQ", path: "/faq" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* INFORMATION Section */}
            <div className="space-y-4">
              <h3 className="uppercase tracking-wider text-lg font-bold text-blue-300 mb-3">INFORMATION</h3>
              <ul className="space-y-2">
                {[
                  { name: "Privacy policy", path: "/privacy" },
                  { name: "Terms of Service", path: "/terms" },
                  { name: "Responsible gambling", path: "/responsible-gambling" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL MEDIA Section */}
            <div className="space-y-4">
              <h3 className="uppercase tracking-wider text-lg font-bold text-blue-300 mb-3">SOCIAL MEDIA</h3>
              <div className="space-y-4">
                <p className="text-blue-100 text-sm">Follow us on social media</p>
                <div className="flex gap-3">
                  {[
                    { icon: <FaFacebookF size={20} />, color: "bg-[#4267B2]", label: "Facebook" },
                    { icon: <FaTwitter size={20} />, color: "bg-[#1DA1F2]", label: "Twitter" },
                    { icon: <FaInstagram size={20} />, color: "bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C]", label: "Instagram" },
                    { icon: <FaYoutube size={20} />, color: "bg-[#FF0000]", label: "YouTube" }
                  ].map((social) => (
                    <a
                      key={social.label}
                      rel="noopener noreferrer"
                      href="#"
                      title={social.label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${social.color} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg border border-blue-800`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-blue-800 py-6 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Stars and Stripes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}