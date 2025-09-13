import Navbar from "../components/Navbar";
import bt21Group from "../assets/images/bt21_group.png";
import { Link } from "react-router-dom"; // simpler navigation

export default function Home() {
  return (
    <div className="min-h-screen bg-[#bd73f5] relative font-pixel overflow-hidden">
      <Navbar />

      {/* Center content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] space-y-8 relative z-10">
        <img
          src={bt21Group}
          alt="BT21 Characters"
          className="w-96 h-auto opacity-80"
        />

        <h1 className="text-white text-3xl md:text-5xl drop-shadow-[2px_2px_0_#6f09bd] text-center">
          Study with BT21!
        </h1>

        <Link
          to="/focus" 
          className="bg-[#6f09bd] text-white font-pixel text-xl px-8 py-4 drop-shadow-[2px_2px_0_#e7d2f7] hover:scale-110 hover:drop-shadow-[4px_4px_0_#e7d2f7] transition-all"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
