import { RefreshIcon, HeadphonesIcon, InfoIcon } from "@/icons/captcha-icons";
import { useState } from "react";

const easyTasks = [
  {
    filepath: "snippets/snippet1.png",
    rows: 4,
    columns: 4,
    errors: [{r: 2, c: 2}, {r: 3, c: 2}]
  }, {
    filepath: "snippets/snippet2.png",
    rows: 8,
    columns: 3,
    errors: [{r: 3, c: 1}, {r: 3, c: 2}, {r: 4, c: 1}]
  }, {
    filepath: "snippets/snippet3.png",
    rows: 8,
    columns: 11,
    errors: []
  }
] as { filepath: String, rows: number, columns: number, errors: {r: number, c: number}[] }[];

const SelectBox = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={selected ? "border-8 border-solid border-white" : ""}
    />
  );
}

export const CAPTCHA = () => {
  const [currentTask, setCurrentTask] = useState<number>(0);

  return (
    <div className="absolute z-100 bg-white text-black ">
      <div className="flex flex-col gap-1 w-full p-2">
        <div className="flex justify-between bg-[#1973e8] text-white p-4">
          <div>
            <p>Select all squares with</p>
            <p className="text-xl font-bold">programming errors</p>
            <p>If there are none, click skip</p>
          </div>

          <img src={String(easyTasks[currentTask].filepath)} className="size-24 aspect-square border-1 border-white" />
        </div>

        <div className="grid bg-black">
          <div className={`w-[400px] [grid-area:1/1] z-10 aspect-square grid *:border-2 *:border-white`}
            style={{
              gridTemplateColumns: `repeat(${easyTasks[currentTask].columns}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${easyTasks[currentTask].rows}, minmax(0, 1fr))`
            }}
          >
            {Array.from({ length: easyTasks[currentTask].columns * easyTasks[currentTask].rows }).map(() => <SelectBox />)}
          </div>

          <img src={String(easyTasks[currentTask].filepath)} className="[grid-area:1/1] z-0 top-0 w-[400px] aspect-square" />
        </div>
      </div>

      <div className="w-full flex justify-between p-2 border-t-2 border-gray-300">
        <div className="flex items-center gap-2 *:size-8">
          <RefreshIcon />
          <HeadphonesIcon />
          <InfoIcon />
        </div>

        <button className="px-6 py-2.5 bg-[#1973e8] text-white font-semibold"
          onClick={() => {
            setCurrentTask((currentTask + 1) % easyTasks.length)
          }}
        >VERIFY</button>
      </div>
    </div>
  );
}
