import React, { useState } from 'react';

import Product from '../../Product/Product';
import fakeData from './../../../fakeData';
import './Shop.css';
import Cart from '../../Cart/Cart';


const Shop = () => {
    const firstTenProduct = fakeData.slice(0,10)

    const [cart,setCart]= useState([]);

    const handleAddProduct= (product) =>{
        console.log('product added',product);
        const newCart =[...cart,product];
        setCart(newCart);
    }
 
    return (
        <div className='shop-container'>
     <div className='product-container'>
    {
                firstTenProduct.map((items) => <Product
                handleAddProduct={handleAddProduct}
                 product={items}></Product> )
            }
          

     </div>
     <div className='cart-container'>
     <Cart cart={cart}></Cart>

     </div>
          
        </div>
    );
};

export default Shop;