import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <div className="w-full md:w-[30%] bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 border-r border-gray-700 overflow-hidden flex flex-col h-screen">
      <div className="p-4 border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <h1 className="font-bold text-2xl md:text-3xl px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-text">
          Chats
        </h1>
      </div>
      <Search />
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <Users />
      </div>
    </div>
  );
}

export default Left;