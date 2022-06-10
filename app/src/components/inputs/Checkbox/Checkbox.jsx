import { Checkbox as MaterialCheckbox } from '@mui/material';
import PropTypes from 'prop-types';
import colors from '@/styles/colors';

export const Checkbox = ({ style, ...props }) => {
  return (
    <MaterialCheckbox
      style={{
        ...style,
        color: colors.primary,
      }}
      {...props}
    />
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
