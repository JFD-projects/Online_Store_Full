import React from "react";
import Pagination from "./pagination";
import TableBody from "./tableBody";
import GroupList from "./groupList";

const Products = ({
  category,
  handleItemSelect,
  selectedProf,
  clearFilter,
  search,
  productsCrop,
  handleSort,
  iconsSort,
  count,
  pageSize,
  currentPage,
  handlePageChange,
}) => {
  return (
    <>
      <div className="d-flex">
        <GroupList
          category={category}
          onItemSelect={handleItemSelect}
          selectedItem={selectedProf}
          clearFilter={clearFilter}
        />
        <TableBody
          products={search === "" ? productsCrop : search}
          onSort={handleSort}
          iconsSort={iconsSort}
        />
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Products;
