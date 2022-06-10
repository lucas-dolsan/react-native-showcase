import { Text } from '@/components/typography/Text';
import { VContainer } from '@/components/containers/BaseContainer';

import colors from '@/styles/colors';
import fontWeights from '@/styles/font-weights';
import spacings from '@/styles/spacings';

import { styled, styledWithProps } from '@/util/ui';

export const HeaderLayout = ({ title, subtitle, subtitlePrefix }) => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <TextContainer>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>
            {subtitlePrefix}
            {subtitle}
          </HeaderSubtitle>
        </TextContainer>
      </ContentContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(VContainer)({
  background: colors.white,
  padding: `${spacings.large}px 0`,
});

const TextContainer = styled(VContainer)({
  justifyContent: 'center',
  height: '100%',
});

const ContentContainer = styledWithProps({
  component: VContainer,
  props: { center: true },
  styles: {
    width: '60%',
  },
});

const HeaderTitle = styledWithProps({
  component: Text,
  props: {
    variant: 'h5',
    color: colors.black,
  },
  styles: {
    fontWeight: fontWeights.bold,
  },
});

const HeaderSubtitle = styledWithProps({
  component: Text,
  props: {
    variant: 'h7',
    color: colors.blueGray,
  },
  styles: {
    fontWeight: fontWeights.normal,
  },
});
