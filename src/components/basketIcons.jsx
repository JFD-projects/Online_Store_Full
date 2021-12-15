import React from "react";
import { Link } from "react-router-dom";

const BasketIcons = ({count}) => {
  return (
    <div className="p-1 bd-highlight d-flex  align-items-center ">
      <Link className="nav-link disabled position-relative" to="/products/basket">
        Корзина<i className="bi bi-cart3"></i>
        <span className="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      </Link>
    </div>
  );
};

export default BasketIcons;
