import { IconButton as MaterialIconButton } from '@mui/material';
import { Icon } from '../../figures/icon/Icon';

import PropTypes from 'prop-types';

export const IconButton = ({ onClick, children, ...props }) => {
  return (
    <>
      <MaterialIconButton onClick={onClick}>
        <Icon {...props} />
      </MaterialIconButton>
      {children}
    </>
  );
};

IconButton.propTypes = {
  ...Icon.propTypes,
  onClick: PropTypes.func,
};
