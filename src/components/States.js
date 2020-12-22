import React, { Component, useState } from "react";
import Cities from "./Cities.js";

export default function States(props) {
  let state = props.state;

  let [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    console.log(`${state.name} is clicked.!`);
    setClicked(!clicked);
    // setDisplay(false);
    // state.display = false;
  };

  return (
    <>
      <h1 id={`state${state.id}`} onClick={() => handleClick()}>
        {state.name}
      </h1>
      <div>
        {clicked &&
          state.cities.map((city) => <Cities key={city.id} city={city} />)}
      </div>
    </>
  );
}
