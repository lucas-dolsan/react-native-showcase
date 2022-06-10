import { TextInput } from './TextInput.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Inputs/TextInput',
  component: TextInput,
};

export const Standard = args => <TextInput {...args} />;
Standard.args = {
  value: '',
  onChange: () => alert('change text'),
  label: 'Standard',
  size: 'small',
  variant: 'standard',
};

export const Outlined = args => <TextInput {...args} />;
Outlined.args = {
  ...Standard.args,
  label: 'Outlined',
  variant: 'outlined',
};

export const Filled = args => <TextInput {...args} />;
Filled.args = {
  ...Standard.args,
  label: 'Filled',
  variant: 'filled',
};
