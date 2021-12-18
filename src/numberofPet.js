import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets =()=> {

  const [currentNumber, setCurrentNumber] = useState(0)

  const add = () => {
    setCurrentNumber(currentNumber + 1)
  }

  const minus = () => {
    if (currentNumber < 1) {
      return;
    }
    setCurrentNumber(currentNumber - 1)
  }

    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{currentNumber}</h5>
        <div>
          <button onClick={minus} id="less">-</button>
          <button onClick={add} id="more">+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
