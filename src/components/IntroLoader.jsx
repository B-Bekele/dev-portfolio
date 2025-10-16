import { useEffect, useState } from "react";

export default function IntroLoader({ onFinish }) {
  const lines = [
    "> Hi,",
    "> I’m Bamlak."
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        // Faster typing speed
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] =
              (newLines[lineIndex] || "") + lines[lineIndex][charIndex];
            return newLines;
          });
          setCharIndex((prev) => prev + 1);
        }, 40); // ↓ was 40ms, now faster
        return () => clearTimeout(timeout);
      } else {
        // Shorter pause before next line
        const timeout = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 600); // ↓ was 600ms
        return () => clearTimeout(timeout);
      }
    } else {
      // Shorter fade and finish times
      const timeout = setTimeout(() => setFadeOut(true), 300); // ↓ was 600ms
      const finishTimeout = setTimeout(() => onFinish(), 800); // ↓ was 1500ms
      setShowCursor(false);
      return () => {
        clearTimeout(timeout);
        clearTimeout(finishTimeout);
      };
    }
  }, [lineIndex, charIndex]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center 
      bg-[#0b0c0f] text-[#00E5FF] text-2xl md:text-5xl font-space 
      transition-opacity duration-500 z-[100] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-left space-y-2">
        {displayedLines.map((line, i) => (
          <p key={i}>
            {line}
            {showCursor && i === lineIndex && (
              <span className="animate-pulse text-[#00E5FF]">|</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
