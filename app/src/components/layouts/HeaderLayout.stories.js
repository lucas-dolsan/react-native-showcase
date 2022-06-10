import { fakeUser } from '@/fixtures/fake-data';
import { HeaderLayout } from './HeaderLayout';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Layouts/HeaderLayout',
  component: HeaderLayout,
};

export const Default = args => <HeaderLayout {...args} />;

Default.args = {
  style: { background: 'whitesmoke' },
  title: fakeUser.company.name,
  subtitle: fakeUser.company.registered_user_count,
  subtitlePrefix: 'Registered users: ',
};
