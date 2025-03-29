"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { checkUserSavedMessage } from "@/actions/checkUserSavedMessage";
import { addMessage } from "@/actions/addMessage";
import { getLastMessages } from "@/actions/getLastMessages";

// const SignOut = (props: { setUser: React.Dispatch<React.SetStateAction<string | null>> }) => (
//   <div
//     className="p-2 bg-red-500 cursor-pointer"
//     onClick={async () => {
//       try {
//         await authClient.signOut();
//         props.setUser(null);
//       } catch (error) {
//         console.error("Sign-out failed:", error);
//       }
//     }}
//   >
//     Sign out
//   </div>
// );

const MessageForm = (props: {
  userId: string;
  addedMessage: boolean;
  createMessage: (formData: FormData) => Promise<void>;
}) => {
  const [hasPreviousMessage, setHasPreviousMessage] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchMessageStatus = async () => {
      const result = await checkUserSavedMessage(props.userId);

      setHasPreviousMessage(result);
    };

    fetchMessageStatus();
  }, [props.userId, props.addedMessage]);

  // if (!hasPreviousMessage) {
  //   return <div>Loading!!!</div>;
  // }

  return !hasPreviousMessage ? (
    <form action={props.createMessage} className="flex justify-between">
      <textarea
        maxLength={80}
        name="message"
        id="message-input"
        className="bg-black text-white w-full"
        placeholder="Enter your message here..."
      />

      <button className="py-2 px-3 w-fit cursor-pointer bg-green-900 hover:bg-green-800">Save message</button>
    </form>
  ) : (
    <div>You&apos;ve already sent a message, soldier.</div>
  );
};

const SignIn = () => (
  <div
    className="py-2 px-3 w-fit bg-green-900 hover:bg-green-800 hover:animate-sidewaysGlitch cursor-pointer text-white"
    onClick={async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "http://localhost:3000/fun",
      });
    }}
  >
    Sign in using Github
  </div>
);

const UserSign = (props: { username: string; message: string }) => (
  <div className="flex flex-col gap-1 p-1 border-[1px] border-zinc-900 border-b-zinc-700 border-r-zinc-700">
    <div className="flex items-center gap-1">
      <p className="peer text-xs">{props.username}</p>

      {/* <div className="*:peer-hover:opacity-100 *:opacity-0 *:size-3">
        <LeaveSiteIcon />
      </div> */}
    </div>

    <p className="leading-3">{props.message}</p>

    <p className="text-gray-700 text-xs py-2 leading-[8px]">Thank you for your sacrifice, you shall be remembered.</p>
  </div>
);

export const SignList = () => {
  const [userInfo, setUserInfo] = useState<{ id: string; displayName: string } | null>(null);
  const [addedMessage, setAddedMesssage] = useState(false);
  const [lastMessages, setLastMessages] = useState<
    {
      userId: string | null;
      displayName: string;
      message: string | null;
      createdAt: Date;
    }[]
  >();

  const createMessage = async (formData: FormData) => {
    if (!userInfo?.id) return;
    if (await checkUserSavedMessage(userInfo?.id)) return; // You've already sent a message

    const messageField = formData.get("message");
    const message = typeof messageField === "string" ? messageField : "";

    await addMessage(userInfo.id, userInfo.displayName, message);
    setAddedMesssage(true);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const session = await authClient.getSession();
      console.log("session: ");
      console.log(session);
      console.log("---");

      console.log(session.data);
      if (session.data) setUserInfo({ id: session.data.user.id, displayName: session.data.user.name });
      console.log(session.data?.user.id);
      console.log(session.data?.user.name);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const getLastMessagesFromDatabase = async () => {
      setLastMessages(await getLastMessages());
    };

    getLastMessagesFromDatabase();
  }, [addedMessage]);

  return (
    <div>
      <p className="font-bold text-2xl text-center text-gray-400 underline">- The Great Memorial -</p>
      <p className="text-xs italic text-center leading-3 pl-2 pr-6 pb-4">
        All the members who have dedicated their life and soul as a sacrifice under{" "}
        <span className="font-semibold">- The Great Memorial -</span> shall be remembered as fearless warriors who never
        thought of giving up, these soldiers have truly ascended, for those, might is not an issue. Every soldier
        signing is concious that his deeds shall never be forgotten and his message shall be passed through generations.
      </p>

      <div className="w-full border-[1px] border-green-900 mb-2">
        {userInfo ? (
          <MessageForm userId={userInfo.id} createMessage={createMessage} addedMessage={addedMessage} />
        ) : (
          <div className="flex justify-between">
            <p className="italic">Are you ready to become a soldier?</p> <SignIn />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        {lastMessages?.map((sign, index) => (
          <UserSign key={`sign-${index}`} username={sign.displayName} message={sign.message ?? "unknown"} />
        ))}
      </div>
    </div>
  );
};
