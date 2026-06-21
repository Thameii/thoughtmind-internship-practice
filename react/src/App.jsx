import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="extra">
        <button onClick={() => setCount(count + 5)}>
          + 5
        </button>

        <button onClick={() => setCount(count - 5)}>
          - 5
        </button>

        <button onClick={reset}>
          Reset
        </button>
      </div>

    </div>
  );
}

function App() {
  return (
    <Counter />
  );
}

export default App;