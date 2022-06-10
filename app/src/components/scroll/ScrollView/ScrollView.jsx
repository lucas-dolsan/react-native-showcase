import { VContainer } from '../../containers/BaseContainer';

import spacings from '@/styles/spacings';

import { styledWithProps } from '@/util/ui';

export const ScrollView = ({ children, ...props }) => {
  return <ScrollViewContainer {...props}>{children}</ScrollViewContainer>;
};

const ScrollViewContainer = styledWithProps({
  component: VContainer,
  props: { align: 'center', center: true },
  styles: {
    overflowY: 'scroll',
    marginTop: spacings.large,
    scrollBehavior: 'smooth',
    height: 120,
  },
});

ScrollView.propTypes = {
  ...ScrollView.propTypes,
};
