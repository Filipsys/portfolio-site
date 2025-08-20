"use client";

import { useEffect, useState } from "react";

export const Campfire = () => {
  const [touched, setTouched] = useState(false);
  const [cursorIndex, setCursorIndex] = useState(1);

  useEffect(() => {
    // Doing the unholy here, forgive me
    // please. I'll fix this once I migrate
    // to React 19 as I don't want to mess
    // with those god-forsaken forwardRefs.
    const mainDiv = document.getElementById("main");
    if (!mainDiv) return;

    const image = new Image();
    image.src = "./fire-cursor-tileset.webp";

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 32;
    canvas.height = 32;

    let cursorIndex = 0;
    let interval: NodeJS.Timeout;

    image.onload = () => {
      interval = setInterval(() => {
        cursorIndex = (cursorIndex + 1) % 100;

        ctx?.clearRect(0, 0, 32, 32);
        ctx?.drawImage(image, 32 * cursorIndex, 0, 32, 32, 0, 0, 32, 32);

        const dataURL = canvas.toDataURL("image/png");
        if (touched) mainDiv.style.cursor = `url(${dataURL}) 0 0, auto`;
      }, 120);
    };

    return () => clearInterval(interval);
  }, [touched]);

  return (
    <div
      onMouseOver={() => setTouched(true)}
      onFocus={() => setTouched(true)}
      className="h-32 aspect-square"
      style={{
        backgroundImage: "url(./campfire.gif)",
        backgroundSize: "150px",
      }}
    />
  );
};
