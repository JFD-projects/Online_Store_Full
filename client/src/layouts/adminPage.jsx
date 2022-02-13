import React, { useState } from "react";
import AdminTable from "../components/adminPageComponent/adminTable";
import AdminForm from "../components/adminPageComponent/adminForm";
import { useProducts } from "../hooks/useProducts";
import { useSelector } from "react-redux";
import { getCategory } from "../store/category";

const AdminPage = () => {
  const clearData = {
    name: "",
    category: "",
    cost: "",
    countProduct: "",
    imageProduct: "",
  };
  const category = useSelector(getCategory())
  const { products, removeProduct, createProduct, updateProduct } = useProducts();
  const [data, setData] = useState(clearData);
  const adminProductDelete = (productId) => {
    // удаление продукта админ
    removeProduct(productId);
  };
  const adminProductEdit = (productId) => {
    // изменение продукта админ
    const editProduct = products.find((c) => c._id === productId);
    setData(editProduct);
  };
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const addNewProduct = () => {
    // добавление нового продукта с администратора
    if (
      data.category &&
      data.name &&
      data.cost &&
      data.countProduct
    ) {
      if (
        !products.some((c) => {
          return c.name === data.name;
        })
      ) {
        createProduct(data);
        setData(clearData);
      } else {
        updateProduct(data);
        setData(clearData);
        console.log("hi")
      }
    }
  };
  return (
    <div className="d-flex m-2">
      <AdminForm
        category={category}
        onChange={handleChange}
        data={data}
        addNewProduct={addNewProduct}
      />
      <AdminTable
        products={products}
        adminProductDelete={adminProductDelete}
        adminProductEdit={adminProductEdit}
      />
    </div>
  );
};

export default AdminPage;
