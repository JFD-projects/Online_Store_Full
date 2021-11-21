import React from "react";
import NavBar from "./components/navBar";
import Products from "./layouts/mainPage";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import ProductPage from "./components/productPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/products/:productId" component={ProductPage} />
        <Route path="/" component={Products} />
      </Switch>
    </>
  );
}

export default App;
