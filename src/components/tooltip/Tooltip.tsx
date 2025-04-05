export const Tooltip = (props: { text: string }) => (
  <div className="absolute text-nowrap peer-hover:opacity-100 peer-hover:pointer-events-auto pointer-events-none opacity-0 -top-8 left-1/2 -translate-x-1/2 bg-background border-[1px] border-primary/10 px-2 py-1 transition-opacity duration-150">
    <p>{props.text}</p>
  </div>
);
