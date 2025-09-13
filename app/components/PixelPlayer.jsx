// PixelPlayer.jsx
import { useState, useRef, useEffect } from "react";

export default function PixelPlayer({ songs, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!isOpen) return null; // Don't render anything if not open

  const currentSong = songs[currentIndex];

  // Play/pause handling
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  return (
    <div className="fixed top-16 right-4 z-50 bg-[#e7d2f7] border-2 border-[#6f09bd] rounded-lg shadow-lg w-64 p-4 flex flex-col items-center font-pixel">
      {/* Song Image */}
      <img
        src={currentSong.image}
        alt={currentSong.title}
        className="w-40 h-40 object-cover mb-2 border-2 border-[#6f09bd]"
      />

      {/* Song Title */}
      <p className="font-bold text-[#6f09bd] mb-2">{currentSong.title}</p>

      {/* Audio element */}
      <audio ref={audioRef} src={currentSong.src} />

      {/* Controls */}
      <div className="flex gap-2 mb-2">
        <button
          onClick={handlePrev}
          className="px-2 py-1 bg-[#6f09bd] text-white rounded font-bold"
        >
          ◀
        </button>
        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          className="px-2 py-1 bg-[#6f09bd] text-white rounded font-bold"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
        <button
          onClick={handleNext}
          className="px-2 py-1 bg-[#6f09bd] text-white rounded font-bold"
        >
          ▶
        </button>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="text-sm underline text-[#6f09bd]"
      >
        Close
      </button>
    </div>
  );
}
