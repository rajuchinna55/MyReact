import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function ShoppingProducts(){
    const  params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url: `http://fakestoreapi.com/products/category/${params.catName}`
        })
        .then(response => {
            setProducts(response.data);
        })
    },[]);

    return( 
        <div className="container-fluid">
            <h2> {params.catName} Products</h2>
            <div className="d-flex">
                {
                    products.map(product=> 
                         <div key={product.id}>
                            <Link to={`/details/${product.id}`}>
                            <img  className="me-2 border border-1 border-primary p-2" src={product.image} width="100" height="100"/>
                            </Link>
                         </div>
                        )
                }
            </div>
            <p>
                <Link to="/home">Back to Categories</Link>
            </p>
        </div>
    )
}