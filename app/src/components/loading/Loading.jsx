import { forwardRef } from 'react';
import { CircularProgress } from '@mui/material';

import { HContainer } from '../containers/BaseContainer';

import colors from '@/styles/colors';

export const Loading = forwardRef(({ loading }, ref) => {
  return (
    <HContainer center>
      {loading && <CircularProgress style={{ color: colors.primary }} />}
    </HContainer>
  );
});

Loading.displayName = 'Loading';
