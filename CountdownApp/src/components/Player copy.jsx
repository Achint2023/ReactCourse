import { useState } from "react";
export default function Player() {

  const [name, setName] = useState();
  // const [submit, setSubmitted] = useState(false);
  const [nameHolder, setNameHolder] = useState('unknown entity');

  const handleName = (event) => {
    // setSubmitted(false);
    setName(event.target.value);
  }

  const handleButton = () => {
    // setSubmitted(true);
    setNameHolder(name); 
  } 


  return (
    <section id="player">
      <h2>Welcome {nameHolder}</h2>
      <p>
        <input type="text" onChange={handleName}/>
        <button onClick={handleButton}>Set Name</button>
      </p>
    </section>
  );
}
