import { useState, useRef } from "react";
export default function Player() {

  const [name, setName] = useState();

  const playerName = useRef();

  const handleButton = () => {
    // setSubmitted(true);
    setName(playerName.current.value); 
    playerName.current.value = '';
  } 


  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
