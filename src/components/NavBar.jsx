import { NavLink,} from "react-router-dom";
import { useContext } from "react";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { CartContext } from "../context/CartContext";

export const NavBar = () => {
  const {totalQty} = useContext(CartContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            COKUS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to={`/category/Hogar`}
                >
                  Hogar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/category/Tecnología`}>
                  Tecnología
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`/category/Herramienta`}>
                  Herramienta
                </NavLink>
              </li>             
            </ul>
            <NavLink className="nav-link" to={`/cart`}>
              <Badge badgeContent={totalQty()} color="secondary">
                <ShoppingCartIcon color="action" />
              </Badge>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
