import MaterialIcon from '@mui/material/Icon';
import PropTypes from 'prop-types';

import colors from '@/styles/colors';
import fontSizes from '@/styles/font-sizes';

export const Icon = ({ name, color, size, style, preset }) => {
  const presets = {
    postIcons: {
      ...fontSizes.default,
      color: color ? color : colors.blueGray,
    },
  };

  const combinedStyles = {
    color,
    fontSize: size,
    ...presets[preset],
    ...style,
  };

  return <MaterialIcon style={combinedStyles}>{name}</MaterialIcon>;
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  preset: PropTypes.string,
};
