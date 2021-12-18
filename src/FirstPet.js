import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet =() => {
 
  const [firstPet, setFirstPet ] = useState(false)

  const handleCheck = () => {
    setFirstPet(!firstPet)
  }
    


    return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input onClick={handleCheck} type="checkbox" />
        </form>
        <h5>{!firstPet ? "No" : "Yes"}</h5>
      </section>
    );
  
}

export default FirstPet;
