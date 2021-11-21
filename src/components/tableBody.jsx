import React from "react";
import ProductCard from "./productCard";

const TableBody = ({ products, onSort, iconsSort }) => {
  
  
  return (
    <div className="flex-grow-1 m-2">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <p>Сортировать по цене   </p>
        <button onClick ={onSort} type="button" className="btn btn-light m-10">{iconsSort()}</button>
      </div>
      <ul className="list-group">
        {products.map((item) => (
          <li className="list-group-item" key={item._id}>
            <ProductCard
              name={item.name}
              cost={item.cost}
              imageProduct={item.imageProduct}
              countProduct={item.countProduct}
              id={item._id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableBody;
