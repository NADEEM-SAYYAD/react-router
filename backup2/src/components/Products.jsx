import React from "react";
import { useParams } from "react-router-dom";

const Products = (props) => {
    const {category} = useParams();
    console.log(category)

    console.log(props.name);
    console.log(props.match.params.category);
    return <div>Products</div>;
};
export default Products;
