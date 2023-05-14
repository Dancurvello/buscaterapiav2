import React from "react";
import { useState } from 'react';


function SelectSpecialty() {
    const [myCar, setMyCar] = useState("Psicologo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Psicologo">Psicologo</option>
          <option value="Fisioterapeuta">Fisioterapeuta</option>
        </select>
      </form>
    )
  }

  export default SelectSpecialty