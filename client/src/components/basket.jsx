import React from "react";
import BasketProductCard from "./basketProductCard";
import BasketTotal from "./basketTotal";

const Basket = ({basket, onIncrement, onDecrement, onBasketDelete, onBasketClear}) => {
  if (basket.length === 0){return (
    <div className = "p-2 container shadow">
      <h5>Ваша корзина пуста</h5>
    </div>
    
  )} else {
  return (
    <div className = "container shadow">
      <div class="d-flex bd-highlight">
        <div class="p-2 flex-grow-1 bd-highlight">
          <ul className="list-group">
          {basket.map((item) => (
            <li className="list-group-item" key={item.product._id}>
              <BasketProductCard basketCard={item}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onBasketDelete={onBasketDelete}
              />
            </li>
            ))}
          </ul>
        </div>
            <BasketTotal basket={basket} onBasketClear={onBasketClear}/>
      </div>
    </div>)}
};

export default Basket;
