import React from "react";
import ReactDOM from "react-dom/client";

function Better(props) {
  return (
    <div>
      <h1>React is {5 + 5} times better with JSX</h1>
      <p>Today is a {props.weather} day.</p>
    </div>
  );
}


export default Better;

