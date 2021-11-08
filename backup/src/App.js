import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route
                        path="/products"
                        render={(props) => (
                            <Products searchBy="newest" {...props} />
                        )}
                    />
                    <Route path="/posts/:year?/:month?" component={Posts} />
                    <Route path="/admin" component={Dashboard} />
                    <Route from="/messages" to="/posts" component={Posts} />
                    <Route path="/" exact component={Home} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        );
    }
}
export default App;