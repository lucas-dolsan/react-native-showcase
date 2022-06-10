import { Modal } from './Modal';
import { Text } from '../typography/Text';
import colors from '@/styles/colors';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Simple/Modal/Modal',
  component: Modal,
};

export const Default = args => (
  <>
    <div>
      <div
        hidden={true}
        id="myModal"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          backgroundColor: colors.opaciteGray,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Modal {...args}>
          <Text variant="h6">
            This component displays in modal the children passed to it!
          </Text>
          <button
            onClick={() => {
              let modal = document.getElementById('myModal');
              modal.hidden = true;
              modal.style.display = 'none';
            }}>
            Close Modal
          </button>
        </Modal>
      </div>
      <button
        onClick={() => {
          let modal = document.getElementById('myModal');
          modal.hidden = false;
          modal.style.display = 'flex';
        }}>
        Open Modal
      </button>
    </div>
  </>
);

Default.args = {};
