import React from 'react';
import './Product.css';
import { FaShoppingCart } from "react-icons/fa"; 


const Product = (props) => {
    // console.log(props);
    const{ img , name,seller,price,stock}=props.product;
   
    return (
        

        <div className='product'>
            

        <div>
        <img src={img} alt=""/>
        </div>

        <div>

              <h4 className='product-name'>{name}</h4>
              <br/>
              <p> <small>by:{seller}</small></p>
              <p>${price}</p>
              <br/>
              <p> <small>Only {stock} left in stock- order soon</small></p>
              <button className='btn' onClick={ () => props.handleAddProduct(props.product)}><FaShoppingCart /> Add to Cart</button>



        </div>



             </div>
                     
      
        
    );
};

export default Product;