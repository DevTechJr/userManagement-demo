import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const usersRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };

    getUsers();
  }, []);

  const createUser = async (e) => {
    e.preventDefault();
    await addDoc(usersRef, { name: name, age: Number(age) });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  return (
    <div className="App">
      <div>
        <h1>Add A User : </h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
          type="text"
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age..."
          type="number"
        />
        <button onClick={createUser}>Add User</button>
      </div>
      {users.map((user) => (
        <div key={user?.id}>
          <h1>
            User # {user?.id} : {user?.name} , {user?.age}
          </h1>
          <button onClick={() => updateUser(user?.id, user?.age)}>
            Increase Age
          </button>
          <button onClick={() => deleteUser(user?.id)}>Delete User</button>
        </div>
      ))}
    </div>
  );
}

export default App;
