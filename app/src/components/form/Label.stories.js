import { Label } from './Label.jsx';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Form/Label',
  component: Label,
};

export const Top = args => <Label {...args} />;

Top.args = {
  label: 'Top',
  labelPlacement: 'top',
  control: <>{'Text'}</>,
};

export const Bottom = args => <Label {...args} />;

Bottom.args = {
  label: 'Bottom',
  labelPlacement: 'bottom',
  control: <>{'Text'}</>,
};

export const Start = args => <Label {...args} />;

Start.args = {
  label: 'Start',
  labelPlacement: 'start',
  control: <>{'Text'}</>,
};

export const End = args => <Label {...args} />;

End.args = {
  label: 'End',
  labelPlacement: 'end',
  control: <>{'Text'}</>,
};
