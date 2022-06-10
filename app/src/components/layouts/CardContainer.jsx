import { VContainer } from '../containers/BaseContainer';

import spacings from '@/styles/spacings';
import colors from '@/styles/colors';

import { styledWithProps } from '@/util/ui';
import { breakpoints, mq } from '@/styles/breakpoints';

export const CardContainer = ({
  children,
  withoutPadding,
  style,
  ...props
}) => {
  return (
    <Card style={{ padding: withoutPadding ? 0 : '2%', ...style }} {...props}>
      {children}
    </Card>
  );
};

const Card = styledWithProps({
  component: VContainer,
  props: { center: true },
  styles: {
    borderRadius: 0,
    backgroundColor: colors.background,

    width: '100%',
    minHeight: '100%',
    [mq(breakpoints.desktop)]: {
      width: '35%',
      minHeight: '60%',
      borderRadius: spacings.default,
    },
  },
});
