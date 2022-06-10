import { FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';

export const Label = ({ ...props }) => {
  return <FormControlLabel {...props} />;
};

Label.propTypes = {
  label: PropTypes.string,
  labelPlacement: PropTypes.string,
  control: PropTypes.object,
};
