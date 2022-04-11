import { useState } from "react";

const useViewModal = () => {
  // view Modal
  const [meToggle, setMeToggle] = useState(false);
  const activeModal = () => {
    setMeToggle(!meToggle);
  };

  return {
    meToggle,
    activeModal,
  };
};

export default useViewModal;
