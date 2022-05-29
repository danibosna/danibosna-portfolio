import { useEffect, useState } from 'react';

const useGetSomethings = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [API]);

  return products;
};

export default useGetSomethings;
