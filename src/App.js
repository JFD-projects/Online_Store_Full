import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import MainPage from "./layouts/mainPage";
import Registration from "./layouts/registration";
import AdminPage from "./layouts/adminPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
