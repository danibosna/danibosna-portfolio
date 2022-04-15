import { useState } from "react";

const initialObjState = {
  cart: [],
};

const useCartState = () => {
  const [objState, setObjState] = useState(initialObjState);
  const [toggleOrders, setToggleOrders] = useState(false);

  const viewMyOrders = () => {
    setToggleOrders(!toggleOrders);
  };

  const addToCart = (payload) => {
    setObjState({
      ...objState,
      cart: [...objState.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setObjState({
      ...objState,
      cart: objState.cart.filter((_, index) => index !== indexValue),
    });
  };

  return {
    objState,
    addToCart,
    toggleOrders,
    viewMyOrders,
    removeFromCart,
  };
};

export default useCartState;
