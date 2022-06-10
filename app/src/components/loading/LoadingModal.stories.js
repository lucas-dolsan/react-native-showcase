import { LoadingModal } from './LoadingModal';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Loading/LoadingModal',
  component: LoadingModal,
};

export const Default = args => (
  <>
    <LoadingModal {...args} />
  </>
);

Default.args = {
  loading: true,
};
