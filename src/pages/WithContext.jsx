import React, { useState, useContext } from "react";

const Context = React.createContext();

const StateProvider = (props) => {
  const [name, setName] = useState("React JS Training");

  return <Context.Provider value={[name, setName]}>{props.children}</Context.Provider>;
};

const LevelOne = () => {
  const [name] = useContext(Context);

  return (
    <div className="card">
      <div className="card-header">Name is {name}</div>
      <LevelTwo />
    </div>
  );
};

const LevelTwo = () => {
  return (
    <div className="card-body">
      <LevelThree />
    </div>
  );
};

const LevelThree = () => {
  const [name, setName] = useContext(Context);

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input className="form-control mt-3" value={name} onChange={onChange} />
    </div>
  );
};

export default function ContextComponent() {
  return (
    <StateProvider>
      <div className="container py-5">
        <LevelOne />
      </div>
    </StateProvider>
  );
}
