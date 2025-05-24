import { createContext } from "react";

export const screenInfoContext = createContext<{
  screenDimensions: { width: number; height: number };
  charDimensions: { width: number; height: number };
}>({
  screenDimensions: { width: 0, height: 0 },
  charDimensions: { width: 0, height: 0 },
});
