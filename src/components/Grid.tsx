"use client";

import { useEffect, useRef, forwardRef } from "react";

export const Grid = forwardRef<HTMLDivElement, { cursorPosition: { x: number; y: number } }>(
  ({ cursorPosition }, ref) => {
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
      <div className="absolute left-0 top-0 h-full w-full">
        <div
          className="absolute left-0 top-0 h-full w-full"
          ref={(el) => {
            movableGridRef.current = el; // Set the movableGridRef
            if (ref) {
              // Set the forwarded ref if provided
              if (typeof ref === "function") {
                ref(el);
              } else {
                ref.current = el;
              }
            }
          }}
          style={{
            backgroundSize: "3vmin 3vmin",
            backgroundImage: "radial-gradient(var(--grid-mask) 4%, transparent 4%)",
            maskMode: "alpha",
            maskImage: `url(radialmask.svg)`,
            maskPosition: "50% 50%",
            maskRepeat: "no-repeat",
            maskSize: "100vh 100vh",
            transition: "opacity 0.2s ease-in-out",
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
  }
);

Grid.displayName = "Grid";
