"use client";

import { useRef } from "react";

export const Grid = () => {
  const backgroundGridRef = useRef<HTMLDivElement>(null);
  const movableGridRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent) => {
    const movableDiv = movableGridRef.current;
    if (!movableDiv) return;

    movableDiv.style.maskPosition = `${event.clientX - movableDiv.clientHeight / 2}px ${
      event.clientY - movableDiv.clientHeight / 2
    }px`;
  };

  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <div
        onMouseMove={handleMove}
        className="absolute left-0 top-0 h-full w-full"
        ref={movableGridRef}
        style={{
          backgroundSize: "3vmin 3vmin",
          backgroundImage: "radial-gradient(rgba(120, 120, 120, 1) 4%, transparent 4%)",
          maskMode: "alpha",
          maskImage: `url(radialmask.svg)`,
          maskPosition: "50% 50%",
          maskRepeat: "no-repeat",
          maskSize: "100vh 100vh",
          transition: "opacity 0.2s ease-in-out",
          opacity: 1,
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute left-0 top-0 h-full w-full"
        ref={backgroundGridRef}
        style={{
          backgroundSize: "3vmin 3vmin",
          backgroundImage: "radial-gradient(rgba(70, 70, 70, 0.8) 4%, transparent 4%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
