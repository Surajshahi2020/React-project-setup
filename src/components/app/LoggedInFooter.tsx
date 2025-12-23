// components/Footer.tsx
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";

export default function LoggedInFooter() {
  return (
    // ❌ removed mt-16
    <footer className="bg-gradient-to-r from-[#0b2f1e] to-[#0a1f16] rounded-2xl p-6 text-white/80">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Skyline Casino"
            className="w-12 h-12"
          />
          <div>
            <p className="font-semibold text-white">
              Terms & Policies
            </p>
            <p className="text-sm text-white/60">
              Rules | Terms & Conditions
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="flex items-center gap-4 text-lg">
          <a className="hover:text-white transition"><FaDiscord /></a>
          <a className="hover:text-white transition"><FaFacebookF /></a>
          <a className="hover:text-white transition"><FaXTwitter /></a>
          <a className="hover:text-white transition"><FaInstagram /></a>
        </div>

        {/* Right */}
        <div className="text-sm text-white/60 text-center md:text-right">
          Rules, Terms and Conditions, and Privacy Policy
        </div>
      </div>
    </footer>
  );
}
