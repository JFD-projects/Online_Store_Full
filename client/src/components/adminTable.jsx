import React from "react";
import AdminTableHeader from "./adminTableHeader";
import AdminTableBody from "./adminTableBody";

const AdminTable = ({ products, adminProductDelete, adminProductEdit }) => {
  if (products) {
    return (
      <div className="container m-2 p-2 shadow">
        <table className="table table-hover">
          <AdminTableHeader />
          <AdminTableBody
            products={products}
            adminProductDelete={adminProductDelete}
            adminProductEdit={adminProductEdit}
          />
        </table>
      </div>
    );
  } else
    return (
      <div className="container m-2">
        <h5>... loading</h5>
      </div>
    );
};

export default AdminTable;
