import { useState, useEffect } from "react";

import type { JSX } from "react";

export const format2dToString = (content2d: string[][]): string => {
  return content2d.map((row) => row.join("")).join("\n");
};

export function useCharDimensions(character: string) {
  const [dimensions, setDimensions] = useState({ charWidth: 0, charHeight: 0 });

  useEffect(() => {
    const tempText = document.createElement("p");
    tempText.classList.add("font-DMMono", "w-fit");
    tempText.textContent = character;
    document.body.appendChild(tempText);

    setDimensions({
      charWidth: tempText.offsetWidth,
      charHeight: tempText.offsetHeight,
    });

    document.body.removeChild(tempText);
  }, [character]);

  return dimensions;
}

export const getHighestLength = (content: string[][] | string[]) => {
  let highestLength = 0;

  for (let i = 0; i < content.length; i++) {
    const length = content[i].length;

    if (length > highestLength) highestLength = length;
  }

  return highestLength;
};

export const applyUniformWidth = (content2d: string[][]): string[][] => {
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

export const applyPadding2d = (
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

export const convertJSXTo2d = (element: JSX.Element): string[][] => {
  if (!element?.props?.children) return [[]];

  console.log(element.props.children);

  return [[]];
};

// TODO: Issue with double vertical symbols being drawn when padding is above 3
export const drawOutline = (paddedContent: string[][]) => {
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

export const createBox = (content: string, padding = 0, margin = 0) => {
  const contentArray = content.split("\n");
  const content2d = contentArray.map((row) => row.split(""));

  const uniformWidthContent = applyUniformWidth(content2d);
  const paddedContent = applyPadding2d(uniformWidthContent, padding);
  const outlinedContent = drawOutline(paddedContent);

  return outlinedContent;
};
