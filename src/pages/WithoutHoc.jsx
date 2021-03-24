import React, { useEffect, useState } from "react";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    // Makes request to server
    setUsers([
      { id: 1, name: "Sanjay" },
      { id: 2, name: "Nellutla" },
    ]);
  };

  const removeUser = () => {};

  const addUser = () => {};

  return (
    <>
      <h6>Users in Cards -</h6>
      {users.map((item) => {
        return (
          <div key={item.id} className="card mb-2 py-3">
            {item.name}
          </div>
        );
      })}
    </>
  );
};

const TeamsComponent = () => {
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getUsers();
    getTeams();
  }, []);

  const getUsers = () => {
    // Makes request to server
    setUsers([
      { id: 1, name: "Sanjay" },
      { id: 2, name: "Nellutla" },
    ]);
  };
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
      <p>Total Users - {users.length}</p>
      {users.map((item) => {
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
};

export default function WithoutHocComponent() {
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
