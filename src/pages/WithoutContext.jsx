import React, { useState } from "react";

const LevelOne = ({ name, setName }) => {
  return (
    <div className="card">
      <div className="card-header">Name is {name}</div>
      <LevelTwo name={name} setName={setName} />
    </div>
  );
};

const LevelTwo = ({ name, setName }) => {
  return (
    <div className="card-body">
      <LevelThree name={name} setName={setName} />
    </div>
  );
};

const LevelThree = ({ name, setName }) => {
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input className="form-control mt-3" value={name} onChange={onChange} />
    </div>
  );
};

export default function Context() {
  const [name, setName] = useState("React JS Training");

  return (
    <div className="container py-5">
      <LevelOne name={name} setName={setName} />
    </div>
  );
}
