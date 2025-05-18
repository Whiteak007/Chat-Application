import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden p-2 rounded-full hover:bg-gray-700 transition-all duration-300"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      
      <div className="relative">
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-gray-600 hover:border-blue-500 transition-all duration-300">
            <img 
              src={selectedConversation.profilePic || "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"} 
              alt={selectedConversation.name}
            />
          </div>
        </div>
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
        )}
      </div>
      
      <div>
        <h1 className="text-lg font-semibold text-white">
          {selectedConversation.name}
        </h1>
        <span className={`text-xs ${isOnline ? 'text-green-500' : 'text-gray-500'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;