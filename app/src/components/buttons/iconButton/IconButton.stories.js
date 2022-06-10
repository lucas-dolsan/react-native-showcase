import { Text } from '../../typography/Text';
import { IconButton } from './IconButton';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Buttons/IconButton',
  component: IconButton,
};

export const Default = args => <IconButton {...args} />;

export const WithChildren = args => (
  <Default {...args}>
    <Text>Star</Text>
  </Default>
);

Default.args = {
  name: 'star',
  color: 'blue',
  onClick: () => alert('pressed'),
};

WithChildren.args = {
  ...Default.args,
};
