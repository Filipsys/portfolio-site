"use client";

// import Image from "next/image";

export const FunModeTeleporter = () => (
  <button
    className="relative hidden lg:block hover:*:opacity-100 cursor-pointer *:transition-all *:delay-1000 *:duration-1000"
    onClick={() => {
      window.location.href = "/fun";
    }}
    type="button"
  >
    <p className="px-1 text-red-600 dark:text-red-300 absolute top-0 font-serif opacity-0">Enter fun mode...</p>

    {/* <Image className="opacity-0" src="/cat.svg" width={200} height={200} alt="cat-image" /> */}
  </button>
);
