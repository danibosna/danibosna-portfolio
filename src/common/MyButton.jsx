import { forwardRef } from 'react';

const MyButton = forwardRef(({ onClick, href, children, target }, ref) => {
  return (
    <a href={href} target={target} onClick={onClick} ref={ref}>
      {children}
    </a>
  );
});

export default MyButton;
