import { useContext} from "react";
import { CartContext } from "../context/CartContext";


import { Contador } from "./Contador";



export const ItemDetail = ({ producto }) => {
  
  const {addItem} = useContext(CartContext)

  const onAdd = quantity => addItem(producto, quantity) 
  


  return (
    <>
      <div className="container">
        <div className="card mb-3">
          <img
            src={producto.img}
            className="card-img-top"
            alt={producto.name}
          />
          <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">{producto.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Precio: {producto.price}
              </small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Stock: {producto.stock} 
              </small>
            </p>
            
          </div>
        </div> 
        
        <Contador inicio = {0} stock = {producto.stock} onAdd = {onAdd}/>
        

      </div>
    </>
  );
};
