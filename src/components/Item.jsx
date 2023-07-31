import { NavLink } from "react-router-dom";

export const Item = ({ producto }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className="card  col-3">
            <img src={producto.img} className="card-img-top" alt={producto.name} />
            <div className="card-body">
              <h5 className="card-title">{producto.name}</h5>
              <p className="card-text">Precio: {producto.price}</p>
              <p className="card-text">Categoría: {producto.category}</p>
              <NavLink className="btn btn-primary" to={`/item/${producto.id}`}>Ver mas ...</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
