import React, { Component, useState } from "react";

export default function Towns(props) {
  let town = props.town;

  const handleClick = () => {
    console.log(`${town.name} is clicked.!`);
  };

  return (
    <>
      <h5 key={town.id} id={town.id} onClick={() => handleClick()}>
        {town.name}
      </h5>
    </>
  );
}
