import React from "react";
import Header from "../navigation/Header";

import Home from "../components/Home";
import Products from "../components/Products";
import Features from "../components/Features";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Notfound from "../components/Notfound";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

const Routes = () => {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path="/" render={props=><Home {...props}/>} />
                <Route exact path="/products/:category?" render={props=><Products name="nadeem" {...props}/>}/>
                <Route exact path="/features" render={props=><Features {...props}/>}/>
                <Route exact path="/about-us" render={props=><Aboutus {...props}/>} />
                <Route exact path="/contact-us" render={props=><Contactus {...props}/>} />
                <Route path="/not-found" component={Notfound} />
                <Redirect to="/not-found" />
            </Switch>
        </React.Fragment>
    );
};
export default Routes;