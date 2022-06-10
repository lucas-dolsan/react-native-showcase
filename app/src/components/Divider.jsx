import React from 'react'

import { Divider as MaterialDivider } from '@mui/material';

export const Divider = ({
  style,
  size,
  orientation = 'horizontal',
  ...props
}) => {
  return (
    <MaterialDivider
      orientation={orientation}
      style={{
        [orientation == 'horizontal'
          ? 'borderBottomWidth'
          : 'borderRightWidth']: size,
        ...style,
      }}
      {...props}
    />
  );
};
