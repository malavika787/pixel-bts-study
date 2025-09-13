import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PixelPlayer from "../components/PixelPlayer";

//songs
const songs = [
  { title: "Sea", src: "app/assets/music/Sea.mp3", image: "app/assets/images/sea.jpg" },
  { title: "Dream Glow", src: "app/assets/music/Dreamglow.mp3", image: "app/assets/images/dreamglow.webp" },
  { title: "Heartbeat", src: "app/assets/music/Heartbeat.mp3", image: "app/assets/images/heartbeat.jpg" },
];

export default function StudyStart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { character, background, time } = location.state || {};

  const [secondsLeft, setSecondsLeft] = useState(time * 60);
  const [showPlayer, setShowPlayer] = useState(false); // controls music popup

  // Redirect back if no state is passed
  useEffect(() => {
    if (!character || !background || !time) {
      navigate("/focus");
    }
  }, [character, background, time, navigate]);

  // Timer countdown
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => setSecondsLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="min-h-screen relative font-pixel"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-20">
        <Navbar />
      </div>

      {/* Centered character and timer */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Character */}
        <img
          src={character.img}
          alt={character.name}
          className="w-64 h-64 sm:w-96 sm:h-96"
        />

        {/* Timer Box */}
        <div className="mt-6 bg-[#e7d2f7] text-[#6f09bd] px-6 py-4 rounded-lg shadow-lg text-3xl font-bold">
          {formatTime(secondsLeft)}
        </div>

        {/* Music Button */}
        <button
          className="mt-6 bg-[#6f09bd] text-[#e7d2f7] px-6 py-2 rounded hover:opacity-90"
          onClick={() => setShowPlayer(true)}
        >
          Music
        </button>
      </div>

      {/* PixelPlayer Popup */}
      {showPlayer && (
        <PixelPlayer
          songs={songs}
          isOpen={showPlayer}
          onClose={() => setShowPlayer(false)}
        />
      )}
    </div>
  );
}
