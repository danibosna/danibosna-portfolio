import React, { useContext } from 'react';
import Image from 'next/image';
import OrderItem from '@utils/OrderItem.jsx';
import ShoppingCartContext from '@context/ShoppingCartContext.js';
import arrow from '@assets/images/flechita.svg';
import styles from '@styles/sass/containers/MyOrder.module.sass';

const MyOrder = () => {
	const { objState } = useContext(ShoppingCartContext);
	const sumTotal = () => {
		const total = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = objState.cart.reduce(total, 0);
		return sum;
	}
	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<Image src={arrow} alt="arrow" layout="responsive"/>
				<p>My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{objState.cart.map((product,index) => (
					<OrderItem product={product} key={`orderItem-${product.id}`} indexValue={index} />
				))}
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>{sumTotal()}</p>
				</div>
				<button className={styles['primary-button']}>
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
