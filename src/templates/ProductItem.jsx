import React, { useContext } from 'react';
import addToCartImage from '@images/bt_add_to_cart.svg';
import ShoppingCartContext from '../context/ShoppingCartContext.js';

const ProductItem = ({ product }) => {
	const { images, price, title } = product;
	const { addToCart } = useContext(ShoppingCartContext);

	const handleClick = item => {
		addToCart(item);
	};

	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;