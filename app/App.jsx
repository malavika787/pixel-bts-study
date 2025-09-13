import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import FocusSession from "./routes/FocusSession";
import StudyStart from "./routes/StudyStart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/focus" element={<FocusSession />} />
        <Route path="/study-start" element={<StudyStart />} />
      </Routes>
    </BrowserRouter>
  );
}
