import React, { useEffect } from "react";
import Chatuser from "./Chatuser.jsx";
import Messages from "./Messages.jsx";
import Typesend from "./Typesend.jsx";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 flex flex-col h-screen">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Chatuser />
          <Messages />
          <Typesend />
        </>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5 top-5 p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="max-w-md mx-auto">
        <div className="text-5xl mb-4 animate-bounce">👋</div>
        <h1 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Welcome {authUser.user.fullname}
        </h1>
        <p className="text-gray-400">
          Select a conversation from your contacts to start chatting
        </p>
      </div>
    </div>
  );
};