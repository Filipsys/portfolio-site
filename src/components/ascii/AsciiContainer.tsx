import { useState, useEffect } from "react";

export const AsciiContainer = ({ children }: { children: React.ReactNode }) => {
  const [html, setHtml] = useState<HTMLParagraphElement>();

  useEffect(() => {}, []);

  return html;
};
