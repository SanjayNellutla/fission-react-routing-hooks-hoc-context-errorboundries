import React, { useEffect, useState } from "react";

const withUsers = (WrapperComponent) => {
  return () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);

    const removeUser = () => {};

    const addUser = () => {};

    const getUsers = () => {
      // Makes request to server
      setUsers([
        { id: 1, name: "Sanjay" },
        { id: 2, name: "Nellutla" },
      ]);
    };

    return (
      <WrapperComponent
        users={users}
        setUsers={setUsers}
        removeUser={removeUser}
        addUser={addUser}
      />
    );
  }
  
};

const UsersComponent = withUsers((props) => {
  return (
    <>
      <h6>Users in Cards -</h6>
      {props.users.map((item) => {
        return (
          <div key={item.id} className="card mb-2 py-3">
            {item.name}
          </div>
        );
      })}
    </>
  );
});

const TeamsComponent = withUsers(props => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = () => {
    // Makes request to server
    setTeams([
      { id: 1, name: "Red", count: 1 },
      { id: 2, name: "Blue", count: 1 },
    ]);
  };
  return (
    <>
      <h6>Users in Badge -</h6>
      <p>Total Users - {props.users.length}</p>
      {props.users.map((item) => {
        return (
          <div key={item.id} className="badge badge-primary mx-2  my-2">
            {item.name}
          </div>
        );
      })}
      <h6>Teams -</h6>
      {teams.map((item) => {
        return (
          <div key={item.id} className="card mb-2 py-3">
            Team Name - {item.name}
            <div>Count - {item.count}</div>
          </div>
        );
      })}
    </>
  );
});

export default function WithHocComponent() {
  return (
    <div className="container py-5">
      <div className="card my-2">
        <div className="card-body">
          <UsersComponent />
        </div>
      </div>
      <div className="card my-2">
        <div className="card-body">
          <TeamsComponent />
        </div>
      </div>
    </div>
  );
}
