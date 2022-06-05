import { useState } from 'react';

const useViewMenu = () => {
  // view Menu
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return {
    toggle,
    handleToggle,
  };
};

export default useViewMenu;
