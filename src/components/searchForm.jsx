import React from "react";

const SearchForm = ({value, onChange, onSearchProduct}) => {

  return (
    <div className="p-2 flex-grow-1 bd-highlight">
      <div className="d-flex">
        <input
          className="form-control m-3"
          type="search"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        <button className="btn btn-outline-primary m-3" onClick={onSearchProduct} >
          Search
        </button>
      </div>
    </div>
    
  );
};

export default SearchForm;
