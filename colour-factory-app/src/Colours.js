import React from "react";
import { Link } from "react-router-dom";


function ColorList({colours}) {
  const colorLinks = Object.keys(colours).map(colorName => (
    <li key={colorName}>
      <Link to={`/colours/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
   
      <header className="ColorList-header">
        <h1 className="ColorList-title">Welcome to the color factory.</h1>
        <h1>
          <Link to="/colours/new">Add a color</Link>
        </h1>
      </header>
      <div className="ColorList-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;