import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ShoppingDetails()
{
    const params = useParams();
    const [product, setProduct] = useState({id:0, title:'', price:0, category: '', rating: {rate:0, count:0}});
    useEffect(()=>{
        axios({
            method:"get",
            url: `http://fakestoreapi.com/products/${params.prodId}`
        })
        .then(response=> {
            setProduct(response.data);
        })
    },[]);
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Preview</dt>
                <dd><img src={product.image} width="100" height="100"/></dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd><span className="bi bi-star-fill text-success"></span> {product.rating.rate} [{product.rating.count}]</dd>
            </dl>
            <p>
                <Link to={`/products/${product.category}`}>Back to {product.category}</Link>
            </p>
        </div>
    )
}