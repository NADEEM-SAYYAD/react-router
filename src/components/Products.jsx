import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    useRouteMatch,
    Switch,
    Route
} from "react-router-dom";
const Products = () => {
    const { path } = useRouteMatch();
    return (
        <div>
            <h2>My All Products</h2>
            <Router>
                <ul>
                    <li>
                        <NavLink to={`${path}/washing_machine`}>
                            Washing Machine
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${path}/mobile_phones`}>
                            Mobile Phones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${path}/coolar`}>Coolar</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${path}/ac`}>AC</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={`${path}/washing_machine`} render={props=><WashingMachine {...props}/>}/>
                    <Route exact path={`${path}/mobile_phones`} render={props=><MobilePhones {...props}/>}/>
                    <Route exact path={`${path}/coolar`} render={props=><Coolar {...props}/>}/>
                    <Route exact path={`${path}/ac`} render={props=><Ac {...props}/>}/>
                </Switch>
            </Router>
        </div>
    );
};

const WashingMachine = () => {
    return <div>WashingMachine</div>;
};
const MobilePhones = () => {
    return <div>MobilePhones</div>;
};
const Coolar = () => {
    return <div>Coolar</div>;
};
const Ac = () => {
    return <div>AC</div>;
};

export default Products;
