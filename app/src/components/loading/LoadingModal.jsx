import Modal from '@mui/material/Modal';
import { Loading } from './Loading';

export const LoadingModal = ({ loading }) => {
  return (
    <Modal
      open={loading}
      style={{ display: 'flex', justifyContent: 'center' }}
      onClose={() => {}}>
      <Loading loading={loading} />
    </Modal>
  );
};
