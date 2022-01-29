import React from "react";

const GroupList = ({ category, onItemSelect, selectedItem, clearFilter}) => {
  if (category) {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3">
        <ul className="list-group">
          {Object.keys(category).map((item) => (
            <li
              className={
                "list-group-item" +
                (category[item] === selectedItem ? " active" : "")
              }
              key={category[item]._id}
              onClick={() => onItemSelect(category[item])}
              role="button"
            >
              {category[item].name}
            </li>
          ))}
        </ul>
        <button className="btn btn-secondary mt-2" onClick={clearFilter}>Сброс</button>
      </div>
    );
  } else {
    return <h4>loading...</h4>;
  }
};

export default GroupList;
