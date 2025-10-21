import { CloseIcon } from "@/icons/fun-icons";

export const ErrorPopup = () => (
  <div className="fixed bg-red-500 z-50 p-2 w-80 top-24 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <button
      type="button"
      className="absolute right-2 top-2 cursor-pointer"
      onClick={(event) => event.currentTarget.parentElement?.remove()}
    >
      <CloseIcon />
    </button>

    <p className="text-4xl">Uh oh!</p>

    <p>
      Seems like there was an error with the scanner app opening, try again
      later
    </p>
  </div>
);
