import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";

const User = ({ id, name, username, email, phone }) => {

  const {removeUser} = useContext(UsersContext);

  return (
    <div className="bg-white shadow-sm rounded-md p-3 w-64 relative">
      <h2 className="text-lg font-medium mb-1">{name}</h2>
      <p className="text-gray-600 text-sm"><strong>Username:</strong> {username}</p>
      <p className="text-gray-600 text-sm"><strong>Email:</strong> {email}</p>
      <p className="text-gray-600 text-sm"><strong>Phone:</strong> {phone}</p>
      <button onClick={() => removeUser(id)} className="top-2 text-red-500 right-2 absolute">X</button>
    </div>
  );
};

export default User;
