import React from "react";

const AdminTableBody = ({ products, adminProductDelete, adminProductEdit }) => {
  return (
    <tbody>
      {products.map((item) => (
        <tr key={item._id}>
          <th>{item._id}</th>
          <th>{item.name}</th>
          <th>{item.category.name}</th>
          <th>{item.cost} руб.</th>
          <th>{item.countProduct}</th>
          <th>
            <img
              src={item.imageProduct}
              className="img-fluid rounded-start "
              alt="..."
              style={{ maxHeight: "50px", maxWidth: "50px" }}
            />
          </th>
          <th>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => {
                adminProductEdit(item._id);
              }}
            >
              <i className="bi bi-brush"></i>
            </button>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => {
                adminProductDelete(item._id);
              }}
            >
              <i className="bi bi-x-circle"></i>
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default AdminTableBody;
