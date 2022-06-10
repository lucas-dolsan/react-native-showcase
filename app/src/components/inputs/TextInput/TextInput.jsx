import { styled, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import colors from '@/styles/colors';

const BaseTextInput = ({
  value,
  style,
  label,
  onChange,
  placeholder,
  size = 'small',
  variant = 'outlined',
  ...props
}) => {
  return (
    <TextField
      multiline
      label={label}
      style={{ display: 'flex', ...style }}
      size={size}
      value={value}
      variant={variant}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export const TextInput = styled(BaseTextInput)({
  '& label.Mui-focused': {
    color: colors.primary,
  },

  '& .MuiInput-underline:after': {
    borderBottomColor: colors.primary,
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: colors.blueGray,
    },
    '&:hover fieldset': {
      borderColor: colors.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.primary,
    },
  },
});

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string,
};
