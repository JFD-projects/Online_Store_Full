import React, { useState, useEffect } from "react";
import api from "../api";
import GroupList from "../components/groupList";
import SearchForm from "../components/searchForm";
import TableBody from "../components/tableBody";
import _ from "lodash";
import Pagination from "../components/pagination";
import { paginate } from "../utils/paginate";

function Products() {
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();
  const [selectedProf, setSelectedProf] = useState(); // selectedProf-выбранная категория
  const [searchProduct, setSearchProduct] = useState(""); // поиск продукта
  const [search, setSearch] = useState(""); //заносится объект поиска продукта
  const [sortBy, setSortBy] = useState({ iter: "", order: "asc" }); //сортировка по цене
  const [currentPage, setCurrentPage] = useState(1); // выбранная станица
  const pageSize = 5;
  let foundProduct = "";
  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    api.category.fetchAll().then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);
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
    setSortBy({ iter: "", order: "asc" });
  };
  //данные поиска продукта>
  const handleChange = (e) => {
    setSearchProduct(e.target.value.toLowerCase());
    setSelectedProf();
  };
  const handleSearchProduct = (params) => {
    foundProduct=products.filter((item) => item.name.toLowerCase().includes(searchProduct))
    setSearch(foundProduct);
  };

  const handleSort = () => {
    if (sortBy.iter === "") {
      setSortBy({ iter: "cost", order: "asc" });
    } else {
      setSortBy((prevState) => ({
        ...prevState,
        order: prevState.order === "asc" ? "desc" : "asc",
      }));
    }
  };
  const iconsSort = () => {
    if (sortBy.order === "asc") {
      return <i className="bi bi-arrow-up-circle"></i>;
    } else {
      return <i className="bi bi-arrow-down-circle"></i>;
    }
  };
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
};
  
  if (products) {
    const filteredProducts = selectedProf
      ? products.filter((item) => item.category === selectedProf)
      : products;
    const count = search === "" ? filteredProducts.length : foundProduct.length;
    const sortProducts = _.orderBy(
      filteredProducts,
      [sortBy.iter],
      [sortBy.order]
      );

  const productsCrop = paginate(sortProducts, currentPage, pageSize);
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
  } else {
    return <h5>Loading...</h5>;
  }
}

export default Products;
