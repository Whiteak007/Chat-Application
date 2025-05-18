import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`px-4 transition-all duration-300 ${
        isSelected ? "bg-gray-700/50" : "hover:bg-gray-700/30"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer group">
        <div className="relative">
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-blue-500 transition-all duration-300">
              <img 
                src={user.profilePic || "https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"} 
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-white truncate">{user.name}</h1>
            <span className="text-xs text-gray-400">
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <p className="text-sm text-gray-400 truncate">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default User;