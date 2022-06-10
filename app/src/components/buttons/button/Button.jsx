import React from 'react'

import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

import colors from '../../../styles/colors';

export const Button = ({
  style,
  color,
  center,
  disabled,
  intent = 'secondary',
  loading = false,
  ...props
}) => {
  const styles = {
    buttonBorderPrimary: {
      borderWidth: 2,
      elevation: 0,
    },
    buttonBorderSecondary: {
      borderColor: colors.primary,
      borderStyle: 'solid',
      borderWidth: 2,
      elevation: 0,
    },
    buttonBorderText: {
      borderWidth: 2,
      elevation: 0,
    },
  };

  const intentOptions = {
    primary: {
      textColor: colors.white,
      background: disabled ? colors.gray : colors.primary,
      mode: 'contained',
      border: styles.buttonBorderPrimary,
    },
    secondary: {
      textColor: colors.primary,
      mode: 'outlined',
      border: styles.buttonBorderSecondary,
    },
    text: {
      textColor: colors.primary,
      mode: 'text',
      textTransform: 'none',
      border: styles.buttonBorderText,
    },
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: disabled ? colors.gray : color,
        fontWeight: 'bold',
        margin: center ? 'auto' : null,
        ...intentOptions[intent],
        ...style,
        color: intentOptions[intent].textColor,
      }}
      variant={intentOptions[intent].mode}
      {...props}
      onPress={props.onClick}
    />
  );
};

Button.propTypes = {
  intent: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
