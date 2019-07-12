import React, { useState } from "react";
import Character from "./Character";

function StarwarsCharacters(props) {
  const [characters] = useState([props.chars]);
  console.log(characters);

  return (
    <div>
      {characters.map(chars => (
        <Character chars={chars} />
      ))}
    </div>
  );
}

export default StarwarsCharacters;
