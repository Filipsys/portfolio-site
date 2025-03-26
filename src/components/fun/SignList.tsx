"use client";

import { authClient } from "@/lib/auth-client";
import { LeaveSiteIcon } from "@/icons/fun-icons";
import { useEffect, useState } from "react";

const SignOut = (props: { setUser: React.Dispatch<React.SetStateAction<string | null>> }) => (
  <div
    className="p-2 bg-red-500 cursor-pointer"
    onClick={async () => {
      try {
        await authClient.signOut();
        props.setUser(null);
      } catch (error) {
        console.error("Sign-out failed:", error);
      }
    }}
  >
    Sign out
  </div>
);

const SignIn = () => (
  <div
    className="py-2 px-3 w-fit bg-green-900 hover:bg-green-800 hover:animate-sidewaysGlitch cursor-pointer text-white"
    onClick={async () => {
      const data = await authClient.signIn.social({
        provider: "github",
        callbackURL: "http://localhost:3000/fun",
      });
    }}
  >
    Sign in using Github
  </div>
);

const SendMessageButton = () => (
  <div className="py-2 px-3 w-fit cursor-pointer bg-green-900 hover:bg-green-800">Save message</div>
);

const UserSign = (props: { username: string; message: string }) => (
  <div className="flex flex-col gap-1 border-[1px] border-zinc-900 border-b-zinc-700 border-r-zinc-700">
    <div className="flex items-center gap-1">
      <p className="peer cursor-pointer">{props.username}</p>

      <div className="*:peer-hover:opacity-100 *:opacity-0 *:size-3">
        <LeaveSiteIcon />
      </div>
    </div>

    <p className="leading-3">{props.message}</p>

    <p className="text-gray-700 text-xs py-1 leading-[8px]">Thank you for your sacrifice, you shall be remembered.</p>
  </div>
);

export const SignList = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const session = await authClient.getSession();
      setUser(session.data?.user.name ?? null);
    };

    checkAuth();
  }, []);

  const signs: { username: string; message: string }[] = [
    { username: "user1", message: "Message 1 Message 1 Message 1 Message 1 Message 1 Message 1 Message 1 Message 1" },
    { username: "user2", message: "Message 2 Message 2" },
    { username: "user3", message: "Message 3 Message 3 Message 3 Message 3" },
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

      <div className="flex justify-between w-full border-[1px] border-green-900 mb-2">
        {user ? (
          <textarea
            maxLength={80}
            name="message"
            id="message-input"
            className="bg-black text-white w-full"
            placeholder="Enter your message here..."
          />
        ) : (
          <p className="italic">Are you ready to become a soldier?</p>
        )}

        {user ? <SendMessageButton /> : <SignIn />}
      </div>

      <div className="flex flex-col gap-1">
        {signs.map((sign, index) => (
          <UserSign key={`sign-${index}`} username={sign.username} message={sign.message} />
        ))}
      </div>
    </div>
  );
};
