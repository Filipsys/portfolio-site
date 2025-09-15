export const CAPTCHA = () => {
  return (
    <div className="absolute z-100 bg-white text-black ">
      <div className="w-full p-2">
        <div className="flex justify-between bg-[#1973e8] text-white p-4">
          <div>
            <p>Select all squares with</p>
            <p className="text-xl font-bold">programming errors</p>
            <p>If there are none, click skip</p>
          </div>

          <div className="size-24 bg-white" />
        </div>

        <div className="grid bg-black">
          <div className="w-[400px] [grid-area:1/1] z-10 aspect-square grid grid-cols-3 grid-rows-3 bg-white gap-1 *:bg-black">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
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
