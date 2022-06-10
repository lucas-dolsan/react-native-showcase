import PropTypes from 'prop-types';

import { Image } from '@/components/figures/image/Image';

import { Text } from '../../typography/Text';
import { IconButton } from '../iconButton/IconButton';

import colors from '@/styles/colors';

export const VOTE_TYPES = {
  UP: 'upvote',
  DOWN: 'downvote',
};

export const VoteButton = ({
  type = VOTE_TYPES.UP,
  count = 0,
  highlight,
  onClick,
}) => {
  return (
    <>
      <IconButton
        onClick={onClick}
        preset={'postIcons'}
        style={{ fontWeight: 'bold' }}
        color={highlight ? colors.primary : colors.blueGray}
        name={type == VOTE_TYPES.UP ? 'arrow_upward' : 'arrow_downward'}
      />
      <Text preset={'postFooter'}>{count > 0 ? count : ''}</Text>
    </>
  );
};

export const UpvoteButton = ({ count, highlight, onClick }) => {
  return (
    <VoteButton
      type={VOTE_TYPES.UP}
      count={count}
      highlight={highlight}
      onClick={onClick}
    />
  );
};

export const DownvoteButton = ({ count, highlight, onClick }) => {
  return (
    <VoteButton
      type={VOTE_TYPES.DOWN}
      count={count}
      highlight={highlight}
      onClick={onClick}
    />
  );
};

VoteButton.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number,
  highlight: PropTypes.bool,
  onClick: PropTypes.func,
};

UpvoteButton.propTypes = VoteButton.propTypes;

DownvoteButton.propTypes = VoteButton.propTypes;
