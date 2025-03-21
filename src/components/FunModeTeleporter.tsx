"use client";

import Image from "next/image";

export const FunModeTeleporter = () => (
  <div
    className="relative hidden lg:block opacity-20 *:hover:brightness-100 cursor-pointer *:transition-all *:delay-1000 *:duration-1000"
    onClick={() => (window.location.href = "/fun")}
  >
    <p className="px-1 text-red-300 absolute top-0 font-serif brightness-0">Enter fun mode...</p>

    <Image className="brightness-0" src="/cat.svg" width={200} height={200} alt="cat-image" />
  </div>
);
