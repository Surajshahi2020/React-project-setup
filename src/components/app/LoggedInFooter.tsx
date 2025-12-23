import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X logo
import { BsGlobe } from "react-icons/bs"; // website icon

export default function LoggedInFooter() {
  return (
    <footer className="relative overflow-hidden rounded-2xl fixed w-[1017px] left-[366px]">
      {/* Background container */}
      <div className="absolute inset-0">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: "url('/images/up.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "20% 50%", // Adjusted for better left positioning
            filter: "brightness(0.7) contrast(1.1)",
          }}
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f2a1a]/70 to-[#0f2a1a]/90"></div>
      
      {/* Content with reduced height */}
      <div className="relative z-10 p-4 text-white min-h-[120px] flex flex-col justify-center">
        
        {/* Top section - Logo and Terms */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <img
            src="/images/up.jpg"
            alt="Skyline Gaming Logo"
            className="w-10 h-10 rounded-full ring-2 ring-white/30"
          />
          
          <div className="text-left">
            <p className="font-bold text-white text-sm drop-shadow-lg">Terms & Policies</p>
            <p className="font-bold text-gray-200 text-xs mt-1 drop-shadow">
              Rules | Terms & Conditions
            </p>
          </div>
        </div>

        {/* Middle section - Social icons */}
        <div className="flex justify-center gap-4 text-white text-lg my-2">
          <a href="#" className="hover:text-white transition-colors drop-shadow hover:scale-110">
            <BsGlobe />
          </a>
          <a href="#" className="hover:text-white transition-colors drop-shadow hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white transition-colors drop-shadow hover:scale-110">
            <SiX />
          </a>
          <a href="#" className="hover:text-white transition-colors drop-shadow hover:scale-110">
            <FaInstagram />
          </a>
        </div>

        {/* Bottom section */}
        <div className="mt-3">
          <p className="text-gray-200 text-xs text-center drop-shadow">
            Rules, Terms and Conditions, and Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

