export const Separator = (props: { vertical?: boolean }) => (
  <div
    className={`opacity-15 from-background via-neutral-800 dark:via-neutral-100 to-background ${
      props.vertical ? "py-2 bg-linear-to-b h-full w-[1px]" : "px-2 bg-linear-to-r h-[1px] w-full"
    }`}
  />
);
