import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Axios = () => {
    const [userdata, setUserData] = useState([]);
    const [category, setCategory] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    
    useEffect(() => {
        handleData('https://fakestoreapi.com/products');
        handleCategory('https://fakestoreapi.com/products/categories');
    }, []);

    const handleCategory = async (url) => {
        try {
            const rk = await axios.get(url);  
            setCategory(['all', ...rk.data]);
          
        } catch (error) {
            console.error(error);
        }
    };

    const handleData = async (url) => {
        try {
            const response = await axios.get(url);
            setUserData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        if (event.target.value === 'all') {
            handleData('https://fakestoreapi.com/products');
        } else {
            handleData(`https://fakestoreapi.com/products/category/${event.target.value}`);
        }
    };

    const handleBtnClick = (category) => {
        if (category === 'all') {
            handleData('https://fakestoreapi.com/products');
        } else {
            handleData(`https://fakestoreapi.com/products/category/${category}`);
        }
    };

    const handleAddToCartClick = (id) => {
        fetch(`http://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                setCartItems((prevItems) => [...prevItems, data]);
                alert(`${data.title}\nAdded to Cart`);
            });
    };

    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);

    return (
        <div>
            <div>Axios</div>
            <button style={{ background: "red", color: "#fff" }}>
                cxount: {cartCount}
            </button>
            <div>
                <ul style={{ display: "flex", gap: "100px", cursor: "pointer", listStyle: "none" }} >
                    {category.map((ct) => (
                        <li key={ct} onClick={() => handleBtnClick(ct)}>{ct}</li>
                    ))}
                </ul>
            </div>
            <div>
                <select onChange={handleChange}>
                    {category.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "150px", listStyle: "none" }}>
                {userdata.map((item) => (
                    <li key={item.id} style={{ background: "green", padding: "20px" }}>
                        <img style={{ width: "150px", height: "200px" }} src={item.image} alt={item.title} />
                        <div style={{ color: "white" }}>
                            <span>Price: {item.price}</span>
                            <p>rating: {item.rating.rate}</p>
                            <button id={item.id} onClick={() => handleAddToCartClick(item.id)} style={{ padding: "5px 20px", width: "100%", cursor: "pointer" }}>Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
