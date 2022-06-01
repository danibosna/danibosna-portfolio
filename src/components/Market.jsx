import React, { useEffect } from 'react';
import endPoints from '@services/api';

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
    <aside>
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
    </aside>
  )
}

export default Market