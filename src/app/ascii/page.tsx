"use client";

import { useEffect, useState } from "react";

const useCharDimensions = (character: string) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const tempText = document.createElement("p");
    tempText.classList.add("font-DMMono", "w-fit");
    tempText.textContent = character;
    document.body.appendChild(tempText);

    setDimensions({
      width: tempText.offsetWidth,
      height: tempText.offsetHeight,
    });

    document.body.removeChild(tempText);
  }, [character]);

  return dimensions;
};

const createBox = (content: string) => {
  const contentList = content.split("\n");

  const content2d: string[][] = [];
  let highestLength = 0;

  // Get the highest length
  for (const row of contentList) {
    const split = row.split("");

    if (split.length > highestLength) highestLength = split.length;
  }

  // Draw the right whitespace
  for (const row of contentList) {
    const split = row.split("");

    if (split.length === highestLength) {
      content2d.push(split);
      continue;
    }

    for (let i = split.length; i < highestLength; i++) {
      split.push(" ");
    }

    content2d.push(split);
  }

  // Draw the sides
  for (const row of content2d) {
    row.unshift("|");
    row.push("|");
  }

  // Draw the top & bottom lines
  content2d.unshift(Array(highestLength + 2).fill("-"));
  content2d.push(Array(highestLength + 2).fill("-"));

  // Draw the corners
  content2d[0][0] = "+";
  content2d[contentList.length + 1][0] = "+";
  content2d[0][highestLength + 1] = "+";
  content2d[contentList.length + 1][highestLength + 1] = "+";

  return content2d;
};

export default function Ascii() {
  const charDimensions = useCharDimensions("-");
  const [boxContent, setBoxContent] = useState<string>("");
  const [screenDimensions, setScreenDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setScreenDimensions({
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
    });

    setBoxContent(
      createBox("Hello world!\nHello here too!\nwow")
        .map((row) => row.join(""))
        .join("\n"),
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-black font-DMMono text-neutral-300">
      <p>Hello world!</p>

      <p>{charDimensions.width}</p>
      <p>{charDimensions.height}</p>

      <p>Screen dimensions</p>
      <p>{screenDimensions.width}</p>
      <p>{screenDimensions.height}</p>

      <p className="whitespace-pre-wrap leading-4">{boxContent}</p>
    </div>
  );
}
