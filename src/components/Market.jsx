import React, { useEffect } from 'react';
import endPoints from '@services/api';
import styles from '@styles/sass/containers/MyOrder.module.sass';

const Market = () => {

	useEffect(() => {
    async function callMarket(){
      try {
        const response = await fetch(endPoints.ticker.getTicker);
        const data = await response.json();
        marketData(data);
      } catch (error) {
        console.log(error);
      }
    }
    callMarket();
  }, []);
  const marketData = (data) => {
    console.log(data);
  }

	return (
		<aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<p>My order</p>
			</div>
			<div className={styles['my-order-content']}>
			<table>
        <thead>
          <tr>
            <th>Symb</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
			</div>
		</aside>
	);
}

export default Market;
