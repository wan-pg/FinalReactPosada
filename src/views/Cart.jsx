import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

export const Cart = () => {

  const {productosAgregados, deleteItem, clear} = useContext(CartContext)

  const total = () => productosAgregados.reduce(
    (acc, valorActual) => {
      return acc + valorActual.quantity * valorActual.producto.price},0
    
  )
 

  const [formValues, setFormValues] = useState({
    nombre:"",
    apellido: "",
    telefono:"",
    email: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  

  const sendOrder = (e) => {  
    e.preventDefault();  
    const order = {
      buyer: formValues,
      items: productosAgregados,
      total: total(),
    }

     //Firestore

  const db = getFirestore()
  const orderCollection = collection (db, "orders")
  addDoc(orderCollection, order).then(response =>{
    if(response.id){
      clear()
      alert("Su orden: " + response.id + " ha sido completada")
    }
  })
    
  }

  return (
    <div className="container">
      <h1>Lista de Productos</h1>
    {!productosAgregados.length ? (
      <h2>No hay productos</h2>):(
      <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productosAgregados.map(producto =>(
            <tr key = {producto.producto.id}>
            
            <td>{producto.producto.name}</td>
            <td>
              <img 
              height={50}
              src={producto.producto.img} 
              alt={producto.name} />
            </td>
            <td>{producto.producto.price}</td>
            <td>{producto.quantity}</td>
            <td>
              <button
              onClick={()=>deleteItem(producto.producto.id)}
              > Eliminar</button>
            </td>
          </tr>
          ))}          
        </tbody>
        <tfoot>
          <td>Total</td>
          <td></td>
          <td>{total()}</td>          
        </tfoot>
      </table><button 
          type="button" 
          className="btn btn-outline-secondary"
          onClick={()=>clear()}
          >           
            Vaciar
      </button>  

      <h1>Datos de Usuario</h1>  
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input 
          name = "nombre"
          type="text" 
          className="form-control"
          value = {formValues.nombre}
          onChange={handleChange}
           />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input 
          name = "apellido"
          type="text" 
          className="form-control"
          value = {formValues.apellido}
          onChange={handleChange}
           />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input 
          name = "telefono"
          type="text" 
          className="form-control"
          value = {formValues.telefono}
          onChange={handleChange}
           />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label className="form-label">E-mail</label>
          <input 
          name = "email"
          type="text" 
          className="form-control"
          value = {formValues.email}
          onChange={handleChange}
           />
          <div id="emailHelp" className="form-text"></div>
        </div>
        
            
        <button 
        type="submit" 
        className="btn btn-primary"
        onClick={sendOrder}
        >
          Enviar Orden
        </button>
      </form>     
      
      </>)}     

    </div>
    
      );
};
