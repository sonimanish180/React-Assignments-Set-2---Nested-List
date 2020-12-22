import React, { Component, useState } from "react";
import "./../styles/App.css";
// import Cities from "./Cities";
// import States from "./States";

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

// let id = 0;

console.log(states);

function App() {
  console.log("entered");
  // const [display, setDisplay] = React.useState(true);
  // for (let state of states) {
  //   id++;
  //   state.id = id;
  //   state.display = display;

  //   let cityId = 0;
  //   for (let city of state.cities) {
  //     cityId++;
  //     city.id = cityId;
  //     city.display = display;

  //     let townId = 0;
  //     for (let town of city.towns) {
  //       townId++;
  //       town.id = townId;
  //       town.display = display;
  //     }
  //   }
  // console.log(state.id);
  // }
  // const handleClick = (state) => {
  //   console.log(`${state} is clicked.!`);
  //   setDisplay(false);
  //   state.display = false;
  // };

  return (
    <>
      <div id="main"></div>
      {console.log("ENtered render in App")}

      {/* <Cities /> */}
    </>
  );
}

export default App;
