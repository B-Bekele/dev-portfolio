import { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import BackToTop from "./components/BackToTop";
import IntroLoader from "./components/IntroLoader";

export default function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  // Only show intro when visiting home page for the first time
  useEffect(() => {
    if (location.pathname === "/" && !sessionStorage.getItem("introPlayed")) {
      setShowIntro(true);
    }
  }, [location.pathname]);

  const handleFinishIntro = () => {
    sessionStorage.setItem("introPlayed", "true");
    setLoaded(true);
    setTimeout(() => setShowIntro(false), 500); // hide loader after fade-out
  };

  return (
    <>
      {showIntro && <IntroLoader onFinish={handleFinishIntro} />}
      <div
        className={`min-h-screen bg-grid transition-opacity duration-1000 ${
          showIntro && !loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
