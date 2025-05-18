import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 text-white placeholder-gray-400"
        />
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className={`p-3 rounded-lg ${message.trim() ? 
            'bg-blue-600 hover:bg-blue-700' : 
            'bg-gray-600 cursor-not-allowed'} 
            transition-all duration-300 transform hover:scale-105 active:scale-95`}
        >
          <IoSend className="text-white" />
        </button>
      </div>
    </form>
  );
}

export default Typesend;