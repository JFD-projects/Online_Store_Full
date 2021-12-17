import React from "react";

const BasketIcons = ({count}) => {
  return (
    <div className="p-1 bd-highlight d-flex  align-items-center ">
      <div className="nav-link disabled position-relative">
        Корзина<i className="bi bi-cart3"></i>
        <span className="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      </div>
    </div>
  );
};

export default BasketIcons;
