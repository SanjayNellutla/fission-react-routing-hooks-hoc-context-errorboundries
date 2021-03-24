import React, { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const removeUser = (user) => {
    window.alert(`${user.name} will be removed`);
  };

  const addUser = () => {};

  const getUsers = () => {
    // Makes request to server
    setUsers([
      { id: 1, name: "Sanjay" },
      { id: 2, name: "Nellutla" },
    ]);
  };

  return [
    users,
    {
      getUsers,
      addUser,
      removeUser,
    },
  ];
};

export default function CustomHooks() {
  const [users, actions] = useUsers();

  return (
    <div className="container py-5">
      <h6>Users in Cards -</h6>
      {users.map((item) => {
        return (
          <div key={item.id} className="card mb-2 py-3">
            <div className="card-body">{item.name}</div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => actions.removeUser(item)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
