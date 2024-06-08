import React from "react";
import { Colors } from "./Colors";

function App() {

  const colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Pink" },
    { id: 3, name: "White" },
  ];

  return (
    <div>
      <h1>Colors</h1>
      <Colors colors={colors} />
    </div>
  );
}

export default App;
