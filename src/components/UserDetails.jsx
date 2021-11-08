import React from "react";
import { useParams,useHistory } from "react-router";

const UserDetails = () => {
    const { userId } = useParams();
    let history = useHistory();

    const userDetails = [
        { id: 1, firstName: "Karan", lastName: "Sharma" },
        { id: 2, firstName: "Rohan", lastName: "Pathak" },
    ];

    const filterUsers = userDetails.filter(
        (user) => user.id === parseInt(userId)
    )[0];
    

    const backHandler = () =>{
        history.push('/');
    }

    if (filterUsers) {
        return (
            <div>
                <button className="btn btn-warning" onClick={backHandler}>Back</button>
                <h3>User Details</h3>
                <p>Name : {filterUsers.firstName} - {filterUsers.firstName}</p>
            </div>
        );
    }

    return <div>No Details found </div>
};
export default UserDetails;
