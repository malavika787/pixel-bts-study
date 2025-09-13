import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import cookyImg from "../assets/images/cooky.gif";
import koyaImg from "../assets/images/koya.gif";
import shookyImg from "../assets/images/shooky.gif";
import tataImg from "../assets/images/tata.gif";
import rjImg from "../assets/images/RJ.gif";
import chimmyImg from "../assets/images/chimmy.gif";
import maangImg from "../assets/images/mang.gif";

import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/back_1.gif";

export default function FocusSession() {
  const navigate = useNavigate();

  const characters = [
    { name: "Cooky", img: cookyImg },
    { name: "Koya", img: koyaImg },
    { name: "Shooky", img: shookyImg },
    { name: "Tata", img: tataImg },
    { name: "RJ", img: rjImg },
    { name: "Chimmy", img: chimmyImg },
    { name: "Maang", img: maangImg },
  ];

  const backgrounds = [bg1, bg2, bg3];
  const timerSuggestions = [15, 25, 50];

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);
  const [time, setTime] = useState(timerSuggestions[0]);

  const handleStartFocus = () => {
    navigate("/study-start", {
      state: {
        character: selectedCharacter,
        background: selectedBackground,
        time: time,
      },
    });
  };

  return (
    <div
      className="min-h-screen font-pixel bg-gray-200 relative"
      style={{
        backgroundImage: `url(${selectedBackground})`,
        backgroundSize: "cover",
      }}
    >
      {/* Navbar fixed top */}
      <div className="w-full fixed top-0 left-0 z-20">
        <Navbar />
      </div>

      {/* Centered Menu Box */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-[#e7d2f7] p-6 rounded-xl shadow-lg flex flex-col gap-6 w-[700px] z-10 mt-24 text-[#6f09bd] items-center text-center">
          {/* Heading with inverted colors */}
          <h2 className="text-2xl font-bold bg-[#6f09bd] text-[#e7d2f7] px-4 py-2 rounded-lg w-full">
            Focus Session Setup
          </h2>

          {/* Character Selection */}
          <div className="w-full">
            <p className="mb-2 font-bold">Choose Character:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {characters.map((char) => (
                <button
                  key={char.name}
                  className={`border-2 p-2 rounded ${
                    selectedCharacter.name === char.name
                      ? "border-[#6f09bd]"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedCharacter(char)}
                >
                  <img src={char.img} alt={char.name} className="w-12 h-12" />
                </button>
              ))}
            </div>
          </div>

          {/* Background Selection */}
          <div className="w-full">
            <p className="mb-2 font-bold">Choose Background:</p>
            <div className="flex justify-center gap-2">
              {backgrounds.map((bg, idx) => (
                <button
                  key={idx}
                  className={`border-2 p-1 rounded ${
                    selectedBackground === bg
                      ? "border-[#6f09bd]"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedBackground(bg)}
                >
                  <img
                    src={bg}
                    alt={`BG ${idx + 1}`}
                    className="w-24 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Timer */}
          <div className="w-full">
            <p className="mb-2 font-bold">Set Timer (minutes):</p>
            <div className="flex justify-center gap-2 items-center">
              {timerSuggestions.map((t) => (
                <button
                  key={t}
                  className={`px-4 py-2 rounded ${
                    time === t ? "bg-[#6f09bd] text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
              <input
                type="number"
                className="border rounded px-2 w-24 text-[#6f09bd] text-center"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Start Timer */}
          <button
            onClick={handleStartFocus}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Start Focus
          </button>
        </div>
      </div>

      {/* Character Preview */}
        <img
        src={selectedCharacter.img}
        alt={selectedCharacter.name}
        className="absolute bottom-4 right-4 w-32 h-32"
        />
    </div>
  );
}
