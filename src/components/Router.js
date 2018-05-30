import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoreSelector from "./StoreSelector";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StoreSelector} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
