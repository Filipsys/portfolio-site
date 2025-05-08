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
  const { charWidth, charHeight } = useCharDimensions("-");
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

    setCharDimensions({
      width: charWidth,
      height: charHeight,
    });
  }, [charWidth, charHeight]);

  convertJSXTo2d(
    <AsciiContainer>
      <AsciiButton content="My Github" padding={1} />
      <AsciiButton content="My LinkedIn" padding={1} />
      <AsciiBox>
        <AsciiButton content="My email" padding={1} />
      </AsciiBox>
    </AsciiContainer>,
  );

  return (
    <screenInfoContext.Provider value={{ screenDimensions, charDimensions }}>
      <div className="min-h-screen w-full bg-black font-DMMono text-neutral-400 whitespace-pre-wrap leading-4 flex flex-col justify-center items-center">
        <div>
          {/* <p>{boxContent}</p> */}

          <AsciiContainer>
            {/* <AsciiBox content="Hello this is a box!" /> */}

            <AsciiBox>
              <AsciiButton content="My Github" padding={1} />
              <AsciiButton content="My LinkedIn" padding={1} />
              <AsciiButton content="My email" padding={1} />
            </AsciiBox>
          </AsciiContainer>

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
