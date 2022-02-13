import React from "react";
import ProductCard from "./productCard";
import SortCost from "./sortCost";

const TableBody = ({ products, onSort, iconsSort, onChangeProduct }) => {
  
  
  return (
    <div className="flex-grow-1 m-2">
      <SortCost onSort={onSort} iconsSort={iconsSort}/>
      <ul className="list-group">
        {products.map((item) => (
          <li className="list-group-item" key={item._id}>
            <ProductCard
              name={item.name}
              cost={item.cost}
              imageProduct={item.imageProduct}
              countProduct={item.countProduct}
              id={item._id}
              onChangeProduct={onChangeProduct}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableBody;
