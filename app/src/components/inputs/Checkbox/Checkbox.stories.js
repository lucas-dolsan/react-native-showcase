import { Checkbox } from './Checkbox.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Inputs/Checkbox',
  component: Checkbox,
};

export const Default = args => <Checkbox {...args} />;

Default.args = {
  checked: false,
};

export const Checked = args => <Checkbox {...args} />;

Checked.args = {
  checked: true,
};