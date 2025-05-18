import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${itsMe ? 'justify-end' : 'justify-start'} mb-4 px-4`}>
      <div className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 ${itsMe ? 
        'bg-blue-600 rounded-tr-none' : 
        'bg-gray-700 rounded-tl-none'} 
        shadow-md transition-all duration-300 transform hover:scale-[1.02]`}>
        <div className="text-white">{message.message}</div>
        <div className="text-xs text-gray-300 mt-1 text-right">
          {formattedTime}
        </div>
      </div>
    </div>
  );
}

export default Message;