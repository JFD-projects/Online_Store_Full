import React from 'react';

const BasketProductCard = ({basketCard, onIncrement, onDecrement, onBasketDelete}) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3 pt-2 text-center">
                    <img src={basketCard.product.imageProduct} className="img-fluid rounded-start " alt="..." style={{maxHeight: "150px", maxWidth: "150px"}}/>
                </div>
                <div className="col-md-3 text-center">
                    <div className="card-body">
                        <h6 className="card-title">{basketCard.product.name}</h6>
                        <p className="card-text">{basketCard.product._id} -id товара </p>
                        <p className="card-text">{basketCard.product.countProduct} шт. </p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <p>Количество</p>
                    <div className = "d-flex flex-row justify-content-center align-items-center">
                        <button type="button" className="btn btn-link m-0" onClick={()=>onDecrement(basketCard.product._id)}><i className="bi bi-dash-square"></i></button>
                        <h6>{basketCard.value}</h6>
                        <button type="button" className="btn btn-link" onClick={()=>onIncrement(basketCard.product._id)}><i className="bi bi-plus-square"></i></button>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="position-absolute top-0 end-0  rounded-pill ">
                        <button type="button" className="btn btn-link" onClick={()=>onBasketDelete(basketCard.product._id)}>
                        <i className="bi bi-cart-x"></i> 
                        </button>
                    </div>
                    <p>Стоимость</p>
                    <p>{basketCard.product.cost*basketCard.value} руб.</p>
                </div> 
                
            </div>
        </div>
    );
}
 
export default BasketProductCard;