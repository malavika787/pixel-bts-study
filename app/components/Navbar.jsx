import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#e7d2f7] px-6 py-4 border-b-4 border-[#6f09bd] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#6f09bd] font-pixel text-xl drop-shadow-[2px_2px_0_#e7d2f7] pixel-hover"
        >
          Study with BT21!
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6">
          <Link
            to="/focus"
            className="text-[#6f09bd] font-pixel text-sm drop-shadow-[1px_1px_0_#e7d2f7] hover:text-[#9c43ff] hover:scale-110 transition-all pixel-hover"
          >
            Study
          </Link>
          <Link
            to="/about"
            className="text-[#6f09bd] font-pixel text-sm drop-shadow-[1px_1px_0_#e7d2f7] hover:text-[#9c43ff] hover:scale-110 transition-all pixel-hover"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
