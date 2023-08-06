import { useState } from "react"

export const Contador =  ({stock, onAdd, inicio}) => {
      //  Contador iniciado en 0
  const [counter, setCounter] = useState(0)
  
  // Aumentar contador
  const handleClick1 = () => {
    
    if(counter <stock)
   
     setCounter(counter + 1)
    console.log(counter)
  }
  
  // Disminuir contador
  const handleClick2 = () => {
    // Counter state is decremented
        if (counter > 0)
            setCounter(counter - 1)          
        
    }  
  
  return (
    <div>      
      <div >
        {counter}
      </div>
      <div className="buttons">
        <button           
          onClick={handleClick1}>+</button>
        <button 
          onClick={handleClick2}>-</button>
          <button 
          onClick={() => onAdd(counter)}>
            Agregar
          </button>
      </div>
    </div>
  )
}
