import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({ counter: 0 });
  const handleClick = val => {
    if (val === 1) {
      setState({ counter: state.counter + 1 });
    } else if (val === -1) {
      setState({ counter: state.counter - 1 });
    } else {
      setState({ counter: 0 });
    }
  };
  return (
    <div className="App container-fluid">
      <h1>Counter Application</h1>
      <div className="alert alert-primary text-conf" role="alert">
        COUNTER VALUE : <span class="badge badge-light">{state.counter}</span>
      </div>
      <div class="container">
        <div class="row row-cols-3">
          <div class="col">
            <button
              onClick={() => handleClick(1)}
              type="button"
              class="btn btn-primary"
            >
              Inc. Counter <span class="badge badge-light">+1</span>
            </button>
          </div>
          <div class="col">
            <button
              onClick={() => handleClick(-1)}
              type="button"
              class="btn btn-secondary"
            >
              Dec. Counter <span class="badge badge-light">-1</span>
            </button>
          </div>
          <div class="col">
            <button
              onClick={() => handleClick(0)}
              type="button"
              class="btn btn-danger"
            >
              Reset Counter <span class="badge badge-light">0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
