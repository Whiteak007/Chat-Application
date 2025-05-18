import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import { FiMessageSquare } from "react-icons/fi";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10 p-4 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 flex items-center gap-2">
        <FiMessageSquare className="text-blue-500" />
        <h1 className="font-semibold text-white">Messages</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          allUsers.map((user, index) => (
            <User key={user._id || index} user={user} />
          ))
        )}
      </div>
    </div>
  );
}

export default Users;