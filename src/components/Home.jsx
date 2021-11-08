import React from "react";
import { NavLink } from "react-router-dom";
const Home = ({title}) => {
    return (
        <React.Fragment>
            <br />
            <p>Nothing : {title}</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Karan</td>
                        <td>Sharma</td>
                        <td>
                            <NavLink
                                className="btn btn-info"
                                to="/userDetails/1"
                            >
                                See Details
                            </NavLink>

                            <NavLink
                                className="btn btn-info"
                                to="/userSendEmail/1/1"
                                style={{ marginLeft: "5px" }}
                            >
                                Send Email
                            </NavLink>


                            <NavLink
                                className="btn btn-danger"
                                to="/deleteUser/1"
                                style={{ marginLeft: "5px" }}
                            >
                                Delete
                            </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Rohan</td>
                        <td>Pathak</td>
                        <td>
                            <NavLink
                                className="btn btn-info"
                                to="/userDetails/2"
                            >
                                See Details
                            </NavLink>

                            <NavLink
                                className="btn btn-info"
                                to="/userSendEmail/2/1"
                                style={{ marginLeft: "5px" }}
                            >
                                Send Email
                            </NavLink>


                            <NavLink
                                className="btn btn-danger"
                                to="/deleteUser/2"
                                style={{ marginLeft: "5px" }}
                            >
                                Delete
                            </NavLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
};
export default Home;
