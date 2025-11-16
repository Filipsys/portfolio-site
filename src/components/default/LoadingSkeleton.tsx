const PulsingSkeletonText = (props: { length: number; list: string[] }) => (
  <div className="w-full flex flex-wrap gap-2">
    {Array.from({ length: props.length }).map((_, index) => (
      <div
        key={`loader-${index}`}
        className={`${
          props.list[Math.floor(Math.random() * props.list.length)]
        } h-3 pb-2 bg-neutral-900/5 dark:bg-neutral-300/5 animate-pulse delay-500`}
        style={{ transitionDelay: `${index * 1000}ms` }}
      />
    ))}
  </div>
);

const SkeletonRepoCard = () => {
  const listOfLengths = ["w-8", "w-12", "w-16", "w-20", "w-24", "w-28", "w-32"];

  return (
    <div className="h-full p-3 border-[1px] border-neutral-700/10 dark:border-neutral-300/10">
      <div className="flex flex-col justify-between h-full">
        <PulsingSkeletonText length={6} list={listOfLengths} />

        <div className="*:justify-end">
          <PulsingSkeletonText length={2} list={listOfLengths} />
        </div>
      </div>
    </div>
  );
};

export const LoadingSkeleton = () => (
  <>
    {Array.from({ length: 6 }).map((_, index) => (
      <SkeletonRepoCard key={`skeleton-${index}`} />
    ))}
  </>
);
