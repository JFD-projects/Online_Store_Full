import React, { useState, useEffect } from "react";
import api from "../api";
import GroupList from "../components/groupList";
import SearchForm from "../components/searchForm";
import TableBody from "../components/tableBody";
import _ from "lodash";


function Products() {
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();
  const [selectedProf, setSelectedProf] = useState(); // selectedProf-выбранная категория
  const [searchProduct, setSearchProduct] = useState(""); // поиск продукта
  const [search, setSearch] = useState("");//заносится объект поиска продукта
  const [sortBy, setSortBy] = useState({iter:"", order: "asc"}); //сортировка по цене
  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    api.category.fetchAll().then((data) => setCategory(data));
  }, []);
//выбираем категорию>
  const handleItemSelect = (item) => {
    setSearch("");
    setSearchProduct("");
    setSelectedProf(item);
  };
  //очистка фильтра>
  const clearFilter = () => {
    setSelectedProf();
    setSearchProduct("");
    setSearch("");
    setSortBy({iter:"", order: "asc"})
  };
  //данные поиска продукта>
  const handleChange = (e) => {
    setSearchProduct(e.target.value.toLowerCase());
    setSelectedProf();
  };
  const handleSearchProduct = (params) => {
    setSearch(products.filter((item) => 
      item.name.toLowerCase().includes(searchProduct)
    ));
  };
  
  const  handleSort= () => {
    if (sortBy.iter === "") {setSortBy({iter:"cost", order:"asc"})}
    else {setSortBy((prevState)=>({...prevState,order:prevState.order === "asc"?"desc": "asc"}))}
    }
  const iconsSort = () => {
    if (sortBy.order === "asc") {return (<i className="bi bi-arrow-up-circle"></i>)}
    else {return (<i className="bi bi-arrow-down-circle"></i>)}
  }
  
  
  const filteredProducts = selectedProf
    ? products.filter((item) => item.category === selectedProf)
    : products;
  const sortProducts = _.orderBy(filteredProducts, [sortBy.iter], [sortBy.order])

  
  if (products) {
    return (
      <>
        <SearchForm
          value={searchProduct}
          onChange={handleChange}
          onSearchProduct={handleSearchProduct}
        />
        <div className="d-flex">
          <GroupList
            category={category}
            onItemSelect={handleItemSelect}
            selectedItem={selectedProf}
            clearFilter={clearFilter}
          />
          <TableBody products={search === "" ? sortProducts : search} onSort={handleSort} iconsSort={iconsSort} />
        </div>
      </>
    );
  } else {
    return <h5>Loading...</h5>;
  }
}

export default Products;
