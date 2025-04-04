export const Separator = (props: { vertical?: boolean }) => (
  <div
    className={`opacity-15 from-black via-white to-black dark:bg-white ${
      props.vertical ? "py-2 bg-linear-to-b h-full w-[1px]" : "px-2 bg-linear-to-r h-[1px] w-full"
    }`}
  />
);
