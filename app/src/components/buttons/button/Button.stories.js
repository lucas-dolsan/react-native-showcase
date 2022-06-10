import { Button } from './Button.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Buttons/Button',
  component: Button,
};

const Template = args => (
  <>
    <Button {...args}>Click</Button>
    <Button {...args}>Ok</Button>
    <Button {...args}>Longer label button</Button>
    <Button {...args} variant="text">
      Text button
    </Button>
    <Button {...args} variant="outlined">
      Outline button
    </Button>
  </>
);

export const Default = args => <Button {...args} />;
Default.args = {
  children: 'Click me',
  variant: 'contained',
  color: 'black',
};

export const Outlined = args => <Button {...args} />;
Outlined.args = {
  ...Default.args,
  variant: 'outlined',
};

export const Text = args => <Button {...args} />;
Text.args = {
  ...Default.args,
  variant: 'text',
};

function wait(milliSeconds) {
  return new Promise(resolve => setTimeout(resolve, milliSeconds));
}

export const Simple = Template.bind({});
Simple.args = {};

export const Loading = Template.bind({});
Loading.args = { loading: true };

export const AsyncOnClick = Template.bind({});
AsyncOnClick.args = { onClick: () => wait(1e3) };
