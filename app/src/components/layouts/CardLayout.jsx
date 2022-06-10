import { CardContainer } from './CardContainer';

import { VContainer } from '../containers/BaseContainer';

import colors from '@/styles/colors';
import { styled } from '@/util/ui';

export const CardLayout = ({ children, withoutPadding = false }) => {
  return (
    <LayoutContainer>
      <CardContainer withoutPadding={withoutPadding}>{children}</CardContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled(VContainer)({
  backgroundColor: colors.backgroundSecondary,
  width: '100vw',
  height: '100vh',
});
