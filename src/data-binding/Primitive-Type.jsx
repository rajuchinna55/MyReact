import React from 'react'

export const Primitive = () => {
    var id = 1;
    var name = "Samsung TV";
    var price = 45000.44;
    var stock = false;

    var product = {
        "Id" : 1,
        "Name": "Samsung LED TV",
        "Price": 145000.44,
        "Stock": true,
    }
  return (
    <div>
        <h1>Primitive Type</h1>
        <dl>
           <dt>Product Id</dt> 
           <dd>{id}</dd>
           <dt>Product Name</dt> 
           <dd>{name}</dd>
           <dt>Product Price</dt> 
           <dd>{price}</dd>
           <dt>Stock</dt> 
           <dd>{stock==true?"avilable":"out of stock"}</dd>
        </dl>

        <hr />

        <h2>Object - JSON</h2>
        <dl>
           <dt>Product Id</dt> 
           <dd>{product.Id}</dd>
           <dt>Product Name</dt> 
           <dd>{product.Name}</dd>
           <dt>Product Price</dt> 
           <dd>{product.Price}</dd>
           <dt>Stock</dt> 
           <dd>{product.Stock==true?"avilable":"out of stock"}</dd>
        </dl>
    </div>
  )
}
