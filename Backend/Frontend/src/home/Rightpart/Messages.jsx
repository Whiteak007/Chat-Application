import React, { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.js";

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage();
  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loading />
        </div>
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-xl font-semibold mb-2">No messages yet</h2>
          <p className="text-gray-400 max-w-md">
            Start the conversation by sending your first message!
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;