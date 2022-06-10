import { Loading } from './Loading';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Loading/Loading',
  component: Loading,
};

export const Default = args => (
  <>
    <Loading {...args} />
  </>
);

Default.args = {
  loading: true,
};
