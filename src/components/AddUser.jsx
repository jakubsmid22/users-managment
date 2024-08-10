import { useContext, useState } from "react";
import UsersContext from "../context/UsersContext";
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {

    const {addUser} = useContext(UsersContext)

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleAddUser = () => {

        if (!name || !username || !email ||!phone) {
            alert("Please fill all inputs")
            return;
        }

        const id = uuidv4()
        addUser(id, name, username, email, phone);
        setName("");
        setUsername("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-md mx-auto">
          <h2 className="text-lg font-semibold mb-4">Add New User</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleAddUser}
            className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
        </div>
      );
}

export default AddUser