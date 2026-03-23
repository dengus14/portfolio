import React, { useState, useEffect, useRef } from "react";
import "./TerminalWindow.css";

const LINES = [
  "$ git clone https://github.com/denis/portfolio",
  "$ cd portfolio",
  "$ npm install",
  "> installing dependencies... done ✓",
  "$ npm start",
  "> launching dev server on :3000 ✓",
];

const CHAR_DELAY = 40;
const LINE_PAUSE = 400;
const LOOP_PAUSE = 2000;

// windowState: "normal" | "minimized" | "maximized" | "closed"
const TerminalWindow = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [windowState, setWindowState] = useState("normal");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (windowState === "closed" || windowState === "minimized") return;

    if (currentLine >= LINES.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, LOOP_PAUSE);
      return;
    }

    const line = LINES[currentLine];

    if (currentChar < line.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = (updated[currentLine] || "") + line[currentChar];
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, CHAR_DELAY);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentLine, currentChar, windowState]);

  if (windowState === "closed") return null;

  return (
    <div className={`terminal-window terminal-${windowState}`}>
      <div className="terminal-chrome">
        <span
          className="dot dot-red"
          title="Close"
          onClick={() => setWindowState("closed")}
        />
        <span
          className="dot dot-yellow"
          title="Minimize"
          onClick={() => setWindowState(s => s === "minimized" ? "normal" : "minimized")}
        />
        <span
          className="dot dot-green"
          title="Maximize"
          onClick={() => setWindowState(s => s === "maximized" ? "normal" : "maximized")}
        />
        <span className="terminal-title">denis@portfolio:~</span>
      </div>
      {windowState !== "minimized" && (
        <div className="terminal-body">
          {displayedLines.map((line, i) => (
            <div key={i} className="terminal-line">{line}</div>
          ))}
          <span className="terminal-cursor" />
        </div>
      )}
    </div>
  );
};

export default TerminalWindow;
