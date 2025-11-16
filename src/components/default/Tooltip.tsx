export const Tooltip = (props: { text: string }) => (
  <div className="absolute peer-hover:opacity-100 peer-hover:pointer-events-auto pointer-events-none opacity-0 -top-8 left-1/2 -translate-x-1/2 bg-neutral-300 dark:bg-neutral-900 border-[1px] border-neutral-700/10 dark:border-neutral-300/10 px-2 py-1 transition-opacity duration-150">
    <p className="text-nowrap">{props.text}</p>
  </div>
);
