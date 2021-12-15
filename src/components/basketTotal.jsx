import React from 'react';
import { useHistory } from 'react-router-dom';

const BasketTotal = ({basket, onBasketClear}) => {
    const history = useHistory()
    const basketSubmit = () => {
       history.push("/products"); 
       onBasketClear();
    }
    return (
        <div className="m-2 p-2 bd-highlight card">
            <h5>Итого :</h5>
            <h6>{basket.reduce((acc, item)=>{return acc + item.value},0)} шт.</h6>
            <h5>Итоговая сумма:</h5>
            <h6>{basket.reduce((acc, item)=>{return acc + item.value*item.product.cost},0)} руб.</h6>
            <button type="button"  onClick={()=>{basketSubmit()}}className="btn btn-primary">Оформить заказ</button>
        </div>
      );
}
 
export default BasketTotal;