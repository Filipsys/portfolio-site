import { LeaveSiteIcon } from "@/icons/fun-icons";

const UserSign = (props: { username: string; message: string }) => (
  <div className="flex flex-col border-[1px] border-zinc-900 border-b-zinc-700 border-r-zinc-700">
    <div className="flex items-center gap-1">
      <p className="peer cursor-pointer">{props.username}</p>
      <div className="*:peer-hover:opacity-100 *:opacity-0 *:size-3">
        <LeaveSiteIcon />
      </div>
    </div>
    <p className="leading-3">{props.message}</p>
  </div>
);

export const SignList = () => {
  const signs: { username: string; message: string }[] = [
    // { username: "user1", message: "Message 1 Message 1 Message 1 Message 1 Message 1 Message 1 Message 1 Message 1" },
    // { username: "user2", message: "Message 2 Message 2" },
    // { username: "user3", message: "Message 3 Message 3 Message 3 Message 3" },
  ];

  return (
    <div>
      <p className="font-bold text-2xl text-gray-400 underline">- The Great Memorial -</p>
      <p className="text-xs italic leading-3 pl-2 pr-6">
        All the members who have
        <br />
        dedicated their life and soul as a sacrifice under
      </p>
      <p className="text-xs italic leading-3 pl-2 pr-6 animate-sidewaysGlitch font-semibold">- The Great Memorial -</p>
      <p className="text-xs italic leading-3 pl-2 pr-6 pb-6">
        {" "}
        shall be remembered as fearless warriors who never thought of giving up, these
        <br />
        soldiers have truly ascended, for those, might is not an issue. Every soldier
        <br />
        signing is concious that his deeds shall never be forgotten and his message shall be passed through generations.
      </p>

      <div className="flex flex-col gap-1">
        {signs.map((sign, index) => (
          <UserSign key={`sign-${index}`} username={sign.username} message={sign.message} />
        ))}
      </div>
    </div>
  );
};
