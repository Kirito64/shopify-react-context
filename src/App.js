import React from 'react';
import './App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ShopProvider from './context/shopContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HopePage'
import ProductsPage from "./pages/HomePage"
import ProductPage from './pages/ProductPage'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Footer from './components/Footer'
import CollectionsPage from "./pages/collections";
const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();


const App = () => {
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <Router>
          <Navbar />
          <Cart />
          <Switch>
            <Route path="/products">
              <ProductsPage/>
            </Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/collections/:id">
              <CollectionsPage></CollectionsPage>
              </Route>
            <Route path="/">
              <HomePage />
            </Route>
            
          </Switch>
        </Router>
        <Footer></Footer>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
