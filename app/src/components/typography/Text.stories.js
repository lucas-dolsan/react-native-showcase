import { Text } from './Text.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Text',
  component: Text,
};

export const Default = args => <Text {...args}>Click me</Text>;

Default.args = {
  color: 'red',
  variant: 'h2',
  style: {},
};
