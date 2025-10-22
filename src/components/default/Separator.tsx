export const Separator = (props: { vertical?: boolean }) => (
  <div
    className={`opacity-15 from-transparent via-neutral-700 dark:via-neutral-300 to-transparent ${
      props.vertical
        ? "py-2 bg-linear-to-b h-full w-[1px]"
        : "px-2 bg-linear-to-r h-[1px] w-full"
    }`}
  />
);
