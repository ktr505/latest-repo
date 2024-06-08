import React from "react";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
}

export default App;
