import React, { useEffect } from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import MainPage from "./layouts/mainPage";
import Registration from "./layouts/registration";
import AdminPage from "./layouts/adminPage";
import { ProductsProvider } from "./hooks/useProducts";
import { AuthProvider } from "./hooks/useAuth";
import LogOut from "./layouts/logOut";
import UserPage from "./components/userPage";
import Initialize from "./layouts/initialize";
import { useDispatch } from "react-redux";
import { loadCategoryList } from "./store/category";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategoryList());
    }, []);
  return (
    <>
      <AuthProvider>
        <NavBar />
          <ProductsProvider>
            <Switch>
              <Route path="/logout" component={LogOut} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/initialize" component={Initialize} />
              <Route path="/user/:userId?" component={UserPage}/>
              <Route path="/" component={MainPage} />
            </Switch>
          </ProductsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
