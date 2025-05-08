import {
  applyUniformWidth,
  applyPadding2d,
  drawOutline,
  convertJSXTo2d,
} from "@/lib/ascii-functions";

export const AsciiBox = (props: {
  content?: string;
  padding?: number;
  children?: React.ReactNode;
}) => {
  if (!props.content && props.children) {
    // for (let i = 0; i < props.children.length; i++) {
    //   convertJSXTo2d(props.children);
    // }

    return props.children;
  }

  if (!props.content) return;

  const contentArray = props.content.split("\n");
  const content2d = contentArray.map((row) => row.split(""));

  const uniformWidthContent = applyUniformWidth(content2d);
  const paddedContent = applyPadding2d(uniformWidthContent, props.padding || 0);
  const outlinedContent = drawOutline(paddedContent);

  return (
    <>
      <div className="w-fit">{outlinedContent}</div>
      {props.children || null}
    </>
  );
};
