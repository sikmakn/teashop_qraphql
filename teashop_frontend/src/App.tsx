import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import {PATHS} from "./constants";
import CommonCatalog from "./pages/CommonCatalog";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path={`${PATHS.PRODUCT}/:id`} component={ProductPage}/>
                <Route path={PATHS.CATALOG} component={CommonCatalog}/>
                <Route path={PATHS.CART} component={CheckoutPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
