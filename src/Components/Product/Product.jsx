import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product;
    const handleAddToCart = () => {
        console.log('product added')
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} Star</p>
            </div>
            <button onClick={handleAddToCart} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};

export default Product;