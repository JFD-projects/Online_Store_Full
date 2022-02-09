import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import MainPage from "./layouts/mainPage";
import Registration from "./layouts/registration";
import AdminPage from "./layouts/adminPage";
import { CategoryProvider } from "./hooks/useCategory";
import { ProductsProvider } from "./hooks/useProducts";
import { AuthProvider } from "./hooks/useAuth";
import LogOut from "./layouts/logOut";
import UserPage from "./components/userPage";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <CategoryProvider>
          <ProductsProvider>
            <Switch>
              <Route path="/logout" component={LogOut} />
              <Route path="/login" component={Login} />
              <Route path="/registration" component={Registration} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/user/:userId?" component={UserPage}/>
              <Route path="/" component={MainPage} />
            </Switch>
          </ProductsProvider>
        </CategoryProvider>
      </AuthProvider>
      
    </>
  );
}

export default App;
