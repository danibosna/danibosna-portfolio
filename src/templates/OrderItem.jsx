import React, {useContext} from 'react';
import close from '@images/icon_close.png';
import ShoppingCartContext from '@context/ShoppingCartContext';

const OrderItem = ({product, indexValue}) => {
	const {removeFromCart} = useContext(ShoppingCartContext);
	const {images, price, title} = product
	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt={title} />
			</figure>
			<p>{title}</p>
			<p>${price}</p>
			<img src={close} alt="close" onClick={() => removeFromCart(indexValue)}/>
		</div>
	);
}

export default OrderItem;
