// import { screenInfoContext } from "@/app/ascii/providers/screenInfo";
// import { useContext } from "react";
import {
  applyPadding2d,
  applyUniformWidth,
  drawOutline,
} from "@/lib/ascii-functions";

export const AsciiMaxWidthBox = (props: {
  content: string;
  padding?: number;
}) => {
  // const { screenDimensions, charDimensions } = useContext(screenInfoContext);

  const contentArray = props.content.split("\n");
  const content2d = contentArray.map((row) => row.split(""));

  const uniformWidthContent = applyUniformWidth(content2d);
  const paddedContent = applyPadding2d(uniformWidthContent, props.padding || 0);
  const outlinedContent = drawOutline(paddedContent);

  return (
    <>
      <div className="w-fit">{outlinedContent}</div>
    </>
  );
};
