import React, { useContext } from 'react';
import OrderItem from '@templates/OrderItem.jsx';
import ShoppingCartContext from '@context/ShoppingCartContext.js';
import arrow from '@images/flechita.svg';

const MyOrder = () => {
	const { objState } = useContext(ShoppingCartContext);
	const sumTotal = () => {
		const total = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = objState.cart.reduce(total, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p>My order</p>
			</div>
			<div className="my-order-content">
				{objState.cart.map((product,index) => (
					<OrderItem product={product} key={`orderItem-${product.id}`} indexValue={index} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>{sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
