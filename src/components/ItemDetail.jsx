import { useState } from "react";

export const ItemDetail = ({ producto }) => {
  const  [added, setAdded] = useState(false);

  const clickAgregar = ()=>{
    setAdded(true)
  }

  const clickQuitar = ()=>{
    setAdded(false)
  }

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
        {added ? (
          <button 
          type="button" 
          class="btn btn-outline-secondary"
          onClick={clickQuitar}>
            
            Quitar del Carrito
          </button>
        ) : (
          <button 
          type="button" 
          class="btn btn-outline-secondary"
          onClick={clickAgregar}>
            
            Agregar al Carrito
          </button>
        )}
      </div>
    </>
  );
};
