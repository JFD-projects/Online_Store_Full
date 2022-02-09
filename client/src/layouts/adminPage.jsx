import React, { useState, useEffect } from "react";
import api from "../api";
import AdminTable from "../components/adminPageComponent/adminTable";
import AdminForm from "../components/adminPageComponent/adminForm";

const AdminPage = () => {
  const cc = {
    _id: "",
    name: "",
    category: "",
    cost: "",
    countProduct: "",
    imageProduct: "",
  };
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();
  const [data, setData] = useState(cc);
  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    api.category.fetchAll().then((data) => setCategory(data));
  }, []);
  const adminProductDelete = (productId) => {
    // удаление продукта админ
    const newProducts = products.filter((c) => c._id !== productId);
    setProducts(newProducts);
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
      data._id &&
      data.category &&
      data.name &&
      data.cost &&
      data.countProduct
    ) {
      if (
        !products.some((c) => {
          return c._id === data._id;
        })
      ) {
        const newData = { ...data, category: category[data.category] };
        setProducts([...products, newData]);
        setData(cc);
      } else {
        const productIndex = products.findIndex((item) => {
          return item._id === data._id;
        });
        const newProduct = products;
        if (typeof data.category == "string") {
          newProduct[productIndex] = {
            ...data,
            category: category[data.category],
          };
        } else {
          newProduct[productIndex] = data;
        }
        setProducts(newProduct);
        setData(cc);
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
