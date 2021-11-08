import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../components/Home";
import Products from "../components/Products";
import Features from "../components/Features";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import UserDetails from "../components/UserDetails";
import SendEmail from "../components/SendEmail";
import NotFound from "../components/Notfound";

const MyRoutes = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route
                    exact
                    path={`/`}
                    render={(props) => (
                        <Home {...props} title="Nadeem is soft dev" />
                    )}
                />
                <Route exact path={`/products`}>
                    <Products />
                </Route>
                <Route exact path={`/features`}>
                    <Features />
                </Route>
                <Route exact path={`/aboutus`}>
                    <Aboutus />
                </Route>
                <Route exact path={`/contact`}>
                    <Contactus />
                </Route>
                <Route exact path={`/userDetails/:userId`}>
                    <UserDetails />
                </Route>
                <Route exact path={`/userSendEmail/:userId?/:tempId?`}>
                    <SendEmail />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};
export default MyRoutes;
