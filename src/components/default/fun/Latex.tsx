"use client";

import { useState } from "react";
import TeXToSVG from "tex-to-svg";

export const Latex = () => {
  const [outputLaTeX, setOutputLaTeX] = useState<string>();

  return (
    <div className="p-2 border-2 border-blue-700 border-dashed shadow-lg shadow-blue-700">
      <div className="flex items-center">
        <div className="grow h-0.5 bg-blue-700" />

        <p className="text-3xl px-2">
          <span className="italic">LaTeX</span> converter!
        </p>

        <div className="grow h-0.5 bg-blue-700" />
      </div>

      <p>
        Input your latex code below and let the magic happen! Once you do that, you can save the
        image to view your fancy math code as an image.
      </p>

      <textarea
        name="latex-input"
        id="latex-input"
        spellCheck={false}
        placeholder="Enter your LaTeX here..."
        defaultValue="Test \thinspace me \thinspace out!"
        wrap="true"
        rows={4}
        onChange={(event) => setOutputLaTeX(String.raw`${event.currentTarget.value.trim()}`)}
        className="w-full font-mono text-xs border-2 border-blue-700"
      />

      <div className="flex justify-between pb-2">
        <p>Converted LaTeX:</p>

        <a
          className="hover:underline"
          href={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>\n${TeXToSVG(outputLaTeX ?? String.raw`Test \thinspace me \thinspace out!`)}`)}`}
          download="latex-output.svg"
        >
          download it
        </a>
      </div>

      <div
        className="text-3xl"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: TeXToSVG(outputLaTeX ?? String.raw`Test \thinspace me \thinspace out!`),
        }}
      />
    </div>
  );
};
