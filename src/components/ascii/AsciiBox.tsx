import {
  applyUniformWidth,
  applyPadding2d,
  drawOutline,
} from "@/lib/ascii-functions";

export const AsciiBox = (props: {
  content: string;
  padding?: number;
  children: React.ReactNode;
}) => {
  const contentArray = props.content.split("\n");
  const content2d = contentArray.map((row) => row.split(""));

  const uniformWidthContent = applyUniformWidth(content2d);
  const paddedContent = applyPadding2d(uniformWidthContent, props.padding || 0);
  const outlinedContent = drawOutline(paddedContent);

  return (
    <>
      <div className="w-fit">{outlinedContent}</div>
      {props.children}
    </>
  );
};
