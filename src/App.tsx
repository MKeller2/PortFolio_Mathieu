// src/App.tsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cv from "./pages/Cv";
import CalendarProject from "./pages/CalendarProject";
import NbaProject from "./pages/NbaProject";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* Utilisation du Layout pour entourer les pages */}
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* Pages imbriquées dans le Layout */}
          <Route index element={<Home />} />
          <Route path="/nba" element={<NbaProject />} />
          <Route path="/calendar" element={<CalendarProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/project" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
