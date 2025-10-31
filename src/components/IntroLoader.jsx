import { useEffect, useState } from "react";

export default function IntroLoader({ onFinish }) {
  const lines = ["> Hi,", "> I’m Bamlak."];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  // ⏳ Add a short delay before typing starts
  useEffect(() => {
    const delay = setTimeout(() => setTypingStarted(true), 500);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!typingStarted) return;

    if (lineIndex < lines.length) {
      // Skip typing the leading ">" so it’s always visible
      const currentLine = lines[lineIndex];
      const startIndex = 2; // Skip "> "
      if (charIndex < currentLine.length - startIndex) {
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            const prefix = currentLine.slice(0, 2); // "> "
            const typedPart = currentLine.slice(
              startIndex,
              startIndex + charIndex + 1
            );
            newLines[lineIndex] = prefix + typedPart;
            return newLines;
          });
          setCharIndex((prev) => prev + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 600);
        return () => clearTimeout(timeout);
      }
    } else {
      // Hold briefly after finishing before fading
      const hold = setTimeout(() => setFadeOut(true), 1000);
      const finish = setTimeout(() => onFinish(), 1600);
      return () => {
        clearTimeout(hold);
        clearTimeout(finish);
      };
    }
  }, [typingStarted, lineIndex, charIndex, lines, onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center 
      bg-[#0b0c0f] text-[#00E5FF] text-3xl md:text-6xl font-space 
      transition-opacity duration-800 z-[100] ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Blinking cursor animation */}
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .blink {
            display: inline-block;
            width: 0.6ch;
            text-align: left;
            animation: blink 1s step-end infinite;
          }
        `}
      </style>

      <div className="text-left space-y-3 leading-snug">
        {displayedLines.map((line, i) => (
          <p key={i} className="whitespace-pre">
            {line}
            {/* Cursor stays visible until fade completes */}
            {i === lineIndex || (i === lines.length - 1 && !fadeOut) ? (
              <span className="blink">|</span>
            ) : null}
          </p>
        ))}

        {/* Before typing begins: show static prompt + blinking cursor */}
        {!typingStarted && displayedLines.length === 0 && (
          <p>
            {"> "}
            <span className="blink">|</span>
          </p>
        )}
      </div>
    </div>
  );
}
