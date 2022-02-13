import React, { useState, useEffect } from "react";
import SearchForm from "../components/searchForm";
import BasketIcons from "../components/basketIcons";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import { Route, Switch, Link, useHistory } from "react-router-dom";
import ProductPage from "../components/productPage";
import Products from "../components/products";
import Basket from "../components/basket";
import { useProducts } from "../hooks/useProducts"
import { useSelector } from "react-redux";
import { getCategory } from "../store/category";

function MainPage() {
  const category = useSelector(getCategory())
  const { products } = useProducts();
  const [selectedProf, setSelectedProf] = useState(); // selectedProf-выбранная категория
  const [searchProduct, setSearchProduct] = useState(""); // поиск продукта
  const [search, setSearch] = useState(""); //заносится объект поиска продукта
  const [sortBy, setSortBy] = useState({ iter: "", order: "asc" }); //сортировка по цене
  const [currentPage, setCurrentPage] = useState(1); // выбранная страница
  const [basket, setBasket] = useState([]); //продукты в корзине
  const [product, setProduct] = useState();
  const pageSize = 5; // кол-во товара на странице
  const history = useHistory();
  let foundProduct = ""; // найденные продукты
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);
  const handleItemSelect = (item) => {
    //выбираем категорию>
    setSearch("");
    setSearchProduct("");
    setSelectedProf(item);
  };

  const clearFilter = () => {
    //очистка фильтра>
    setSelectedProf();
    setSearchProduct("");
    setSearch("");
    setSortBy({ iter: "", order: "asc" });
  };

  const handleChange = (e) => {
    //данные поиска продукта>
    setSearchProduct(e.target.value.toLowerCase());
    setSelectedProf();
  };
  const handleSearchProduct = () => {
    //поиск продукта
    if (searchProduct) {
      foundProduct = products.filter((item) =>
        item.name.toLowerCase().includes(searchProduct)
      );
      setSearch(foundProduct);
    }
  };
  const handleSort = () => {
    //сортировка по цене
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
    // изменение значка сортировки
    if (sortBy.order === "asc") {
      return <i className="bi bi-arrow-up-circle"></i>;
    } else {
      return <i className="bi bi-arrow-down-circle"></i>;
    }
  };
  
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    console.log(currentPage)
    console.log(pageIndex);
  };
  const putInTheBasket = (item) => {
    // положить в корзину
    if (!basket.some((c) => c.product._id === item._id)) {
      setBasket([...basket, { value: 1, product: item }]);
    }
    history.push("/products");
  };
  const handleIncrement = (productId) => {
    //корзина увеличение кол-ва продукта
    const newBasket = [...basket];
    const elementIndex = newBasket.findIndex(
      (c) => c.product._id === productId
    );
    if (
      newBasket[elementIndex].value <
      newBasket[elementIndex].product.countProduct
    ) {
      newBasket[elementIndex].value++;
    }
    setBasket(newBasket);
  };
  const handleDecrement = (productId) => {
    //корзина уменьшение кол-ва продукта
    const newBasket = [...basket];
    const elementIndex = newBasket.findIndex(
      (c) => c.product._id === productId
    );
    if (newBasket[elementIndex].value > 1) {
      newBasket[elementIndex].value--;
    }
    setBasket(newBasket);
  };
  const handleBasketDelete = (productId) => {
    //корзина удаление продукта
    const newBasket = basket.filter((c) => c.product._id !== productId);
    setBasket(newBasket);
  };
  const handleBasketClear = () => {
    setBasket([]);
  };
  const basketCount = basket.reduce((acc, item) => {
    return acc + item.value;
  }, 0);
  const handleChangeProduct = (id) => {
    // выбор страницы товара
    setProduct(products.find((i)=>i._id===id));
  }

  if (products) {
    const filteredProducts = selectedProf
      ? products.filter((item) => item.category === selectedProf._id)
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
        <div className="d-flex bd-highlight">
          <SearchForm
            value={searchProduct}
            onChange={handleChange}
            onSearchProduct={handleSearchProduct}
          />
          <Link className="nav-link" to="/products/basket">
            <BasketIcons count={basketCount} />
          </Link>
        </div>
        <Switch>
          <Route
            path="/products/basket"
            render={(props) => (
              <Basket
                basket={basket}
                onBasketClear={handleBasketClear}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onBasketDelete={handleBasketDelete}
                {...props}
              />
            )}
          />
          <Route
            path="/products/:productId"
            render={(props) => (
              <ProductPage putInTheBasket={putInTheBasket} product= {product} {...props} />
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <Products
                category={category}
                handleItemSelect={handleItemSelect}
                selectedProf={selectedProf}
                clearFilter={clearFilter}
                search={search}
                productsCrop={productsCrop}
                handleSort={handleSort}
                iconsSort={iconsSort}
                count={count}
                pageSize={pageSize}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                onChangeProduct={handleChangeProduct}
                {...props}
              />
            )}
          />
        </Switch>
      </>
    );
  } else {
    return <h5>Loading...</h5>;
  }
}

export default MainPage;
