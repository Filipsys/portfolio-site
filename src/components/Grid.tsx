"use client";

import { useEffect, useRef, forwardRef, useState } from "react";

export const Grid = forwardRef<HTMLDivElement>(() => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const backgroundGridRef = useRef<HTMLDivElement>(null);
  const movableGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const movableDiv = movableGridRef.current;
    if (!movableDiv) return;

    movableDiv.style.maskPosition = `${cursorPosition.x - movableDiv.clientHeight / 2}px ${
      cursorPosition.y - movableDiv.clientHeight / 2
    }px`;
  }, [cursorPosition]);

  return (
    <div
      className="absolute -z-10 left-0 top-0 h-full w-full"
      onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}
      onMouseOut={() => (movableGridRef.current ? (movableGridRef.current.style.opacity = "0") : null)}
      onMouseOver={() =>
        movableGridRef.current && cursorPosition.x !== 0 && cursorPosition.y !== 0
          ? (movableGridRef.current.style.opacity = "1")
          : null
      }
    >
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          backgroundSize: "3vmin 3vmin",
          backgroundImage: "radial-gradient(var(--grid-mask) 4%, transparent 4%)",
          maskMode: "alpha",
          maskImage: `url(radialmask.svg)`,
          maskPosition: "50% 50%",
          maskRepeat: "no-repeat",
          maskSize: "100vh 100vh",
          transition: "opacity 0.5s ease-in-out",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute left-0 top-0 h-full w-full"
        ref={backgroundGridRef}
        style={{
          backgroundSize: "3vmin 3vmin",
          backgroundImage: "radial-gradient(var(--grid) 4%, transparent 4%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
});

Grid.displayName = "Grid";
