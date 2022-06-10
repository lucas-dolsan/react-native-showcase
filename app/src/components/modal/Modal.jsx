import colors from '@/styles/colors';

// TODO import from material Modal
export const Modal = ({ children }) => {
  const styles = {
    modal: {
      padding: '5%',
      margin: '5%',
      backgroundColor: colors.background,
    },
  };

  return <div style={styles.modal}>{children}</div>;
};

Modal.propTypes = {
  ...Modal.propTypes,
};
