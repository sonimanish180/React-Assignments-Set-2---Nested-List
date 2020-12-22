import React, { Component, useState } from "react";
import Towns from "./Towns.js";

export default function Cities(props) {
  let city = props.city;

  let [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    console.log(`${city.name} is clicked.!`);
    setClicked(!clicked);
  };

  return (
    <>
      <h3 key={city.id} id={city.id} onClick={() => handleClick()}>
        {city.name}
      </h3>
      <div>
        {clicked &&
          city.towns.map((town) => <Towns key={town.id} town={town} />)}
      </div>
    </>
  );
}

// import React, { Component, useState } from "react";

// function Cities(props) {
//   let cities = props.cities;

//   // const [clicked, setClicked] = React.useState(true);

//   const handleClick = (state) => {
//     console.log(`${state.name} is clicked.!`);
//     // setClicked(true);
//     // setDisplay(false);
//     // state.display = false;
//   };

//   return (
//     <>
//       <div id="main">
//         {cities.map((city) => (
//           <div>
//             <h3
//               key={city.id}
//               id={`state${city.id}`}
//               onClick={() => handleClick(city)}
//             >
//               {city.name}
//             </h3>
//             {/* {{ clicked } && <Cities />} */}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Cities;
