"use client";

import { useEffect, useState } from "react";
import { screenInfoContext } from "./providers/screenInfo";
import {
  convertJSXTo2d,
  createBox,
  format2dToString,
  useCharDimensions,
} from "@/lib/ascii-functions";
import { scan } from "react-scan";
import { AsciiButton } from "@/components/ascii/AsciiButton";
import { AsciiBox } from "@/components/ascii/AsciiBox";
import { AsciiContainer } from "@/components/ascii/AsciiContainer";

if (process.env.NODE_ENV === "development") scan();

export default function Ascii() {
  const [screenDimensions, setScreenDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [charDimensions, setCharDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setScreenDimensions({
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
    });

    const { charWidth, charHeight } = useCharDimensions("-");
    setCharDimensions({
      width: charWidth,
      height: charHeight,
    });

    // setBoxContent(
    //   createBox(
    //     "Hi, I'm Filip, a self-taught front-end developer\nfrom Poland. I mainly work with React, NextJS,\nTailwindCSS, TypeScript, and relational databases\nlike SQLite.",
    //     3,
    //   )
    //     .map((row) => row.join(""))
    //     .join("\n"),
    // );
  }, []);

  convertJSXTo2d(
    <div className="flex gap-2">
      <AsciiButton content="My Github" padding={1} />
      <AsciiButton content="My LinkedIn" padding={1} />
      <AsciiButton content="My email" padding={1} />
    </div>,
  );

  return (
    <screenInfoContext.Provider value={{ screenDimensions, charDimensions }}>
      <div className="min-h-screen w-full bg-black font-DMMono text-neutral-400 whitespace-pre-wrap leading-4 flex flex-col justify-center items-center">
        <div>
          {/* <p>{boxContent}</p> */}

          {/* <AsciiContainer>
            <AsciiBox content="Hello this is a box!" />

            <AsciiButton content="My Github" padding={1} />
            <AsciiButton content="My LinkedIn" padding={1} />
            <AsciiButton content="My email" padding={1} />
          </AsciiContainer> */}

          <AsciiButton content="Button" padding={1} />

          <div>
            {format2dToString(
              createBox(`Hello\n\n${format2dToString(createBox("Hello"))}`, 2),
            )}
          </div>
        </div>
      </div>
    </screenInfoContext.Provider>
  );
}
