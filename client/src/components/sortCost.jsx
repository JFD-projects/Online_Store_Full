import React from "react";
const SortCost = ({ onSort, iconsSort }) => {
  return (
    <div className="d-flex  justify-content-center m-2">
      <p className="m-1">Сортировать по цене </p>
      <button onClick={onSort} type="button" className="btn btn-link">
        {iconsSort()}
      </button>
    </div>
  );
};

export default SortCost;
