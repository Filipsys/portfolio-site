import { useState } from "react";

const SelectBox = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={selected ? "transition-colors duration-75 bg-white/20" : ""}
    />
  );
}

export const CAPTCHA = () => {
  const gridSize = { width: 3, height: 3 };

  return (
    <div className="absolute z-100 bg-white text-black ">
      <div className="flex flex-col gap-1 w-full p-2">
        <div className="flex justify-between bg-[#1973e8] text-white p-4">
          <div>
            <p>Select all squares with</p>
            <p className="text-xl font-bold">programming errors</p>
            <p>If there are none, click skip</p>
          </div>

          <img src="snippets/snippet1.png" className="size-24 aspect-square border-1 border-white" />
        </div>

        <div className="grid bg-black">
          <div className={`w-[400px] [grid-area:1/1] z-10 aspect-square grid grid-cols-${gridSize.width} grid-rows-${gridSize.height} *:border-2 *:border-white`}>
            {Array.from({ length: gridSize.width * gridSize.height }).map(() => <SelectBox />)}
          </div>

          <img src="snippets/snippet1.png" className="[grid-area:1/1] z-0 top-0 w-[400px] aspect-square" />
        </div>
      </div>

      <div className="w-full flex justify-between p-2">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-black" />
          <div className="size-8 bg-black" />
          <div className="size-8 bg-black" />
        </div>

        <button className="px-6 py-3 bg-[#1973e8] text-white font-semibold">VERIFY</button>
      </div>
    </div>
  );
}
