import { VoteButton, VOTE_TYPES } from './VoteButton';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Buttons/VoteButton',
  component: VoteButton,
};

export const Upvote = args => <VoteButton {...args} />;

Upvote.args = {
  type: VOTE_TYPES.UP,
  count: 123,
  highlight: false,
  onClick: () => alert('pressed'),
};

export const Downvote = args => <VoteButton {...args} />;

Downvote.args = {
  ...Upvote.args,
  type: VOTE_TYPES.DOWN,
};
