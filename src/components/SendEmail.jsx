import React from "react";
import { useParams } from "react-router";

const SendEmail = () => {
    const { userId, tempId } = useParams();

    if (userId && tempId) {
        return <div>
            <p>User ID :{userId}</p>
            <p>Temp ID :{tempId}</p>
        </div>;
    }
    return <div>Please contact to administrator</div>;
};
export default SendEmail;
