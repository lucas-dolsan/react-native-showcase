import { Icon } from './Icon';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Icon',
  component: Icon,
};

export const Default = args => <Icon {...args} />;

Default.args = {
  name: 'star',
  color: 'blue',
};
