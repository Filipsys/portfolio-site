"use client";

import { useEffect, useState } from "react";

const fireCursorsFolder = "./firecursor-frames";

export const Campfire = () => {
  const [touched, setTouched] = useState(false);
  const [cursorIndex, setCursorIndex] = useState(1);

  useEffect(() => {
    const cursorImages = [];

    const preloadImages = () => {
      for (let i = 1; i <= 100; i++) {
        const image = new Image();

        image.src = `${fireCursorsFolder}/frame-${i}.webp`;
        cursorImages.push(image);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // Doing the unholy here, forgive me
    // please. I'll fix this once I migrate
    // to React 19 as I don't want to mess
    // with those god-forsaken forwardRefs.
    const mainDiv = document.getElementById("main");
    if (!mainDiv) return;

    const interval = setInterval(() => {
      setCursorIndex((cursorIndex) => (cursorIndex < 100 ? cursorIndex + 1 : 1));

      if (touched) {
        mainDiv.style.cursor = `url(${fireCursorsFolder}/frame-${cursorIndex}.webp), auto`;
      }
    }, 120);

    return () => clearInterval(interval);
  }, [cursorIndex, touched]);

  return (
    <div
      onMouseOver={() => setTouched(true)}
      // onMouseOut={() => setTouched(false)}
      className="h-32 w-32"
      style={{
        backgroundImage: "url(./campfire.gif)",
        backgroundSize: "150px",
      }}
    />
  );
};
