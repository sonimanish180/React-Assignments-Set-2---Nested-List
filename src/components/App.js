import React, { Component, useState } from "react";
import "./../styles/App.css";
import States from "./States.js";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

let id = 0;
for (let state of states) {
  id++;
  state.id = `state${id}`;

  let cityId = 0;
  for (let city of state.cities) {
    cityId++;
    city.id = `city${cityId}`;

    let townId = 0;
    for (let town of city.towns) {
      townId++;
      town.id = `town${townId}`;
    }
  }
}

function App() {
  console.log("entered");
  return (
    <>
      <div id="main"></div>
      <div>
        {states.map((state) => (
          <States key={state.id} state={state} />
        ))}
      </div>
    </>
  );
}

export default App;
