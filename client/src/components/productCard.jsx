import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = ({imageProduct,name,countProduct,cost,id}) => {
    return (
        <div className="card flex-grow-1 " >
            <div className="row g-100 ">
                <div className="col-md-3 p-2 d-flex align-items-center justify-content-center" >
                    <img src={imageProduct} className="img-fluid rounded-start " alt="..." style={{maxHeight: "150px", maxWidth: "150px"}}/>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <div className=" flex-column justify-content-center align-items-center ">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{id} -id товара </p>
                        
                        <p className="card-text"><small className="text-muted">Стоимость: {cost} руб.</small></p>
                    </div>
                </div>
                <div className="col-md-1 d-flex justify-content-center align-items-center ">
                     <p className="card-text">{countProduct} шт</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center ">
                    <Link to = {`/products/${id}`}>
                        <button type="button" className="btn btn-primary">Открыть карточку</button>
                    </Link>
                         
                     
                </div>
                
            </div>
        </div>
    );
};
 
export default ProductCard;