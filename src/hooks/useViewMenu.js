import { useCycle } from 'framer-motion';

const useViewMenu = () => {
  // view Menu
  const [toggle, setToggle] = useCycle(false, true);
  const handleToggle = () => {
    setToggle();
  };

  return {
    toggle,
    handleToggle,
  };
};

export default useViewMenu;
