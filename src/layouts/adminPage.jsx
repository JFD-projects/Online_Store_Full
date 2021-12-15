import React, { useState, useEffect } from "react";
import api from "../api";

const AdminPage = () => {
    const [products, setProducts] = useState();
    const [category, setCategory] = useState();
    useEffect(() => {
        api.products.fetchAll().then((data) => setProducts(data));
      }, []);
      useEffect(() => {
        api.category.fetchAll().then((data) => setCategory(data));
      }, []);
    return (  
        <h1>AdminPage</h1>
    );
}
 
export default AdminPage;