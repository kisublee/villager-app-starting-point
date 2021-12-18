import React from "react";
import { useState } from "react/cjs/react.development";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  
  const [addThisAnimal, setAddThisAnimal] = useState([])
  const [typedAnimal, setTypedAnimal] = useState("")

  const getAnimal = (e) => {
    e.preventDefault() 
    console.log("typedAnimal:", e.target.value)
    setTypedAnimal(e.target.value)
  }



  const handleSubmit = (e) => {
    e.preventDefault() 

    let matchingAnimal = animalTypes.find((animal) => {
      return animal === typedAnimal.toLowerCase()
  })  
  console.log(matchingAnimal)
  const count = {}
    let check = addThisAnimal.forEach((each) => {
      if (count[each]) {
        count[each] +=1
        return
     }
     count[each] = 1
   
 })
 console.log(count)

  setAddThisAnimal([...addThisAnimal, matchingAnimal])
  }




  const removeAnimal = (e) => {
 
    const newList = addThisAnimal.splice(0, 1)
    setAddThisAnimal(newList)
  }

  const displayAddedAnimals = addThisAnimal.map((animal, i) => {
    return (
      <li key={i}>
        <p>{animal}</p>
        <button  id={i} onClick={removeAnimal} >Remove</button>
        <p>{i}</p>
      </li>
    )
  })
  console.log(addThisAnimal)

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input onChange={getAnimal} type="text" id="animal-type" />
          </label>
          <input type="submit" />
        </form>
        <ol>{displayAddedAnimals}</ol>
      </section>
    );
  
}

export default AnimalTypes;
