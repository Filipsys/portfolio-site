"use client";

import { useState, useEffect } from "react";

export const UnderlineAnimate = (props: { text: string }) => {
  const [element, setElement] = useState<string>("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setElement(
        `${props.text.slice(0, index)}<span style="text-decoration: underline;">${props.text.charAt(index)}</span>${props.text.slice(index + 1)}`,
      );
      
      index = (index + 1) % props.text.length;
    }, 100);

    return () => clearInterval(intervalId);
  }, [props.text]);

  // biome-ignore lint/security/noDangerouslySetInnerHtml: I'm not sure of any other way of doing it this way
  return <div dangerouslySetInnerHTML={{ __html: element }} />;
};
