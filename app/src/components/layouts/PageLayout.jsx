import PropTypes from 'prop-types';

import { AppBar } from '../appBar/AppBar';
import { BrowserHeader } from '../BrowserHeader';
import { VContainer } from '../containers/BaseContainer';

export const PageLayout = ({
  hideAppbar = false,
  children,
  style,
  ...props
}) => {
  return (
    <VContainer style={{ height: '100vh', ...style }} {...props}>
      <BrowserHeader />
      {!hideAppbar && <AppBar />}
      {children}
    </VContainer>
  );
};

PageLayout.propTypes = {
  style: PropTypes.object,
  hideAppbar: PropTypes.bool,
  children: PropTypes.any,
};
