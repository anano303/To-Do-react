import React, { useCallback, useState } from "react";
import UserItem from "./UserItem";

const UserList = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([
    { id: 1, name: "Ani" },
    { id: 2, name: "Teo" },
  ]);
  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const addUser = (event) => {
    event.preventDefault();

    const user = {
      id: users.length + 1,
      name: inputValue,
    };

    setUsers((prevState) => [...prevState, user]);
    setInputValue("");
  };

  const removeUser = useCallback((id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  }, []);

  return (
    <div className="users">
      <form onSubmit={addUser} className="user-form">
        <input type="text" onChange={onChange} value={inputValue} />
        <button type="submit" className="btn-add">
          Add User
        </button>
      </form>

      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          action={removeUser}
        />
      ))}
    </div>
  );
};
export default UserList;
