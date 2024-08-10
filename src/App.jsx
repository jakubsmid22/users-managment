import { useEffect, useState } from "react";
import UsersContext from "./context/UsersContext";
import UserList from "./components/UserList";
import axios from "axios";
import AddUser from "./components/AddUser";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const removeUser = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }

  const addUser = (id, name, username, email, phone) => {
    const newUser = {id, name, username, email, phone}
    setUsers([...users, newUser]);
  }

  return (
    <UsersContext.Provider value={{users, removeUser, addUser}}>
      <main className="min-h-screen flex flex-col items-center gap-10 p-5">
        <h1 className="font-bold text-3xl">Users Managment</h1>
        <UserList />
        <AddUser/>
      </main>
    </UsersContext.Provider>
  );
};

export default App;
