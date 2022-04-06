import React, { useState } from 'react';
import addToCart from '@images/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState([]);

	const handleClick = () => {
		setCart([]);
	}

  const { images, price, title } = product;
	return (
		<div className="ProductItem">
			<img src={images[0]} alt={title} />
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;