import { createBox } from "@/lib/ascii-functions";

export const AsciiButton = (props: {
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
