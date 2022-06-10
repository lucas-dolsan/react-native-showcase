import { forwardRef } from 'react';

export const Form = forwardRef((props, ref) => {
  return <form ref={ref} {...props} />;
});

Form.displayName = 'Form';
