import React from "react";

function Color({ color }) {
  return <li>{color.name}</li>;
}

function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
  );
}

export { Color, Colors };
