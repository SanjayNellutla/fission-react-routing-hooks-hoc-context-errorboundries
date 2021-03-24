import { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  // Demonstrates component mount and unmount
  useEffect(() => {
    console.log("componentDidMount");
    const interval = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      console.log("componentWillUnmount");
      window.clearInterval(interval);
    };
  }, []);

  return <div>{time.toString()}</div>;
};

const App = () => {
  const [quantity, setQuantity] = useState(1);
  const [showTime, toggleShowTime] = useState(true);
  const [total, setTotal] = useState(0);
  const PRICE = 30;

  // Effect when a quantity value is changed.
  useEffect(() => {
    setTotal((_total) => (_total ? quantity * PRICE : PRICE));
  }, [quantity]);

  return (
    <div className="container py-5">
      <h3>Hooks: useState, useEffect</h3>
      <div className="card my-4">
        {showTime && (
          <div className="card-body">
            <h6 className="card-title">
              <Time />
            </h6>
            <p className="card-text">
              Describes how Time component will perform some action when
              initialised and when component is destroyed
            </p>
          </div>
        )}
        <div className="card-footer">
          <button
            className="btn btn-primary"
            onClick={() => toggleShowTime((t) => !t)}
          >
            Toggle Time
          </button>
        </div>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">Quantity - {quantity}</h5>
          <h5 className="card-title">Total Price - {total}</h5>
          <p className="card-text">
            Describes when quantity value changes we are updating total value
            using useEffect.
          </p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary"
            onClick={() => setQuantity((c) => c + 1)}
          >
            Increase Quantity by 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
