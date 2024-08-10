import { useContext } from "react";
import UsersContext from "../context/UsersContext";
import User from "./User";

const UserList = () => {
  const {users} = useContext(UsersContext);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {users.map((user) => {
        const { id, name, username, email, phone } = user;
        return <User key={id} id={id} name={name} username={username} email={email} phone={phone} />;
      })}
    </div>
  );
};

export default UserList;
