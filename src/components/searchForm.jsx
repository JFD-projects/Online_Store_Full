import React from "react";

const SearchForm = ({value, onChange, onSearchProduct}) => {

  return (
    <div className="d-flex">
      <input
        className="form-control m-3"
        type="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <button className="btn btn-outline-success m-3" onClick={onSearchProduct} >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
