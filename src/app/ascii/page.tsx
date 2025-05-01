"use client";

import { useEffect, useState } from "react";
import { scan } from "react-scan";

if (process.env.NODE_ENV === "development") scan();

const getHighestLength = (content: string[][] | string[]) => {
  let highestLength = 0;

  for (let i = 0; i < content.length; i++) {
    const length = content[i].length;

    if (length > highestLength) highestLength = length;
  }

  return highestLength;
};

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

const applyUniformWidth = (content2d: string[][]): string[][] => {
  const highestLength = getHighestLength(content2d);

  const uniformContent2d: string[][] = [];
  for (let i = 0; i < content2d.length; i++) {
    if (content2d[i].length === highestLength) {
      uniformContent2d.push(content2d[i]);

      continue;
    }

    uniformContent2d.push([
      ...content2d[i],
      ...Array(highestLength - content2d[i].length).fill(" "),
    ]);
  }

  return uniformContent2d;
};

const applyPadding2d = (
  uniformContent2d: string[][],
  padding: number,
): string[][] => {
  const paddedContent: string[][] = [];

  for (let i = 0; i < uniformContent2d.length; i++) {
    const paddingArray = Array.from({ length: padding }, () => " ");
    const xPadding: string[] = [
      ...paddingArray,
      ...uniformContent2d[i],
      ...paddingArray,
    ];

    paddedContent.push(xPadding);
  }

  for (let i = 0; i < Math.floor(padding / 2); i++) {
    const yPadding = Array(uniformContent2d[0].length + padding * 2).fill(" ");

    paddedContent.unshift(yPadding);
    paddedContent.push(yPadding);
  }

  return paddedContent;
};

// TODO: Issue with double vertical symbols being drawn when padding is above 3
const drawOutline = (paddedContent: string[][]) => {
  const outlinedContent: string[][] = [...paddedContent];

  // Edge case for padding set to 0. Will find a better fix soon
  if (outlinedContent.length === 1) {
    outlinedContent[0].unshift("|");
    outlinedContent[0].push("|");
  }

  for (let i = 0; i < outlinedContent.length - 1; i++) {
    outlinedContent[i].unshift("|");
    outlinedContent[i].push("|");
  }

  // Draw the top & bottom lines
  const horizontalBorder = Array.from(
    { length: outlinedContent[0].length },
    (_, index) =>
      index === 0 || index === outlinedContent[0].length - 1 ? "+" : "-",
  );

  outlinedContent.unshift(horizontalBorder);
  outlinedContent.push(horizontalBorder);

  return outlinedContent;
};

const createBox = (content: string, padding = 0, margin = 0) => {
  const contentArray = content.split("\n");
  const content2d = contentArray.map((row) => row.split(""));

  const uniformWidthContent = applyUniformWidth(content2d);
  const paddedContent = applyPadding2d(uniformWidthContent, padding);
  const outlinedContent = drawOutline(paddedContent);

  return outlinedContent;
};

const AsciiButton = (props: {
  content: string;
  padding?: number;
  onClick?: () => void;
}) => (
  <div
    className="w-fit cursor-pointer hover:text-white"
    onClick={() => props.onClick}
    onKeyDown={() => props.onClick}
  >
    {createBox(String.raw`${props.content}`, props.padding || 1)
      .map((row) => row.join(""))
      .join("\n")}
  </div>
);

// const AsciiBox = (props: { content: string; padding?: number }) => (
//   <div className="w-fit">
//     {createBox(String.raw`${props.content}`, props.padding)
//       .map((row) => row.join(""))
//       .join("\n")}
//   </div>
// );

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
      createBox(
        "Hi, I'm Filip, a self-taught front-end developer\nfrom Poland. I mainly work with React, NextJS,\nTailwindCSS, TypeScript, and relational databases\nlike SQLite.",
        3,
      )
        .map((row) => row.join(""))
        .join("\n"),
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-black font-DMMono text-neutral-400 whitespace-pre-wrap leading-4 flex flex-col justify-center items-center">
      <div className="">
        <p>{boxContent}</p>

        <div className="flex gap-2">
          <AsciiButton content="My Github" padding={1} />
          <AsciiButton content="My LinkedIn" padding={1} />
          <AsciiButton content="My email" padding={1} />
        </div>
      </div>
    </div>
  );
}
