/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

export const Image = ({ useNextImage = false, alt, source, ...props }) => {
    return <img src={source} alt={alt} {...props} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  source: PropTypes.any,
  useNextImage: PropTypes.bool,
};
