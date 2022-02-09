import React from "react";
import TextField from "../textField";
import SelectField from "../selectField";

const AdminForm = ({ category, onChange, data, addNewProduct }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct()
  }
  return (
    <div className="d-flex flex-column p-2 m-2 shadow">
      <h6>Блок для добавления или редактирования товара</h6>
      <form onSubmit={handleSubmit}>
        <TextField label="id" name="_id" value={data._id} onChange={onChange} />
        <TextField
          label="Наименование"
          name="name"
          value={data.name}
          onChange={onChange}
        />
        <SelectField
          label="Выбери категорию"
          defaultOption="Choose..."
          options={category}
          onChange={onChange}
          value={data.category}
        />
        <TextField
          label="Стоимость"
          name="cost"
          value={data.cost}
          onChange={onChange}
        />
        <TextField
          label="Количество"
          name="countProduct"
          value={data.countProduct}
          onChange={onChange}
        />
        <TextField
          label="Ссылка на фото"
          name="imageProduct"
          value={data.imageProduct}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
