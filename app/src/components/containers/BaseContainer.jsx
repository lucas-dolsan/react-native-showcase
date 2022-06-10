import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native'


export const BaseContainer = forwardRef(
  (
    {
      style,
      center,
      children,
      spaceBetween,
      direction = 'row',
      spaceChildren,
      ...props
    },
    ref
  ) => {
    return (
      <View
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: direction,
          justifyContent: spaceBetween ? 'space-between' : null,
          margin: center ? 'auto' : null,
          ...style,
        }}
        {...props}>
        {spaceChildren ? (
          <DirectionSpacer direction={direction} space={spaceChildren}>
            {children}
          </DirectionSpacer>
        ) : (
          children
        )}
      </View>
    );
  }
);

export const HContainer = forwardRef(({ ...props }, ref) => {
  return <BaseContainer ref={ref} {...props} direction={'row'} />;
});

export const VContainer = forwardRef(({ ...props }, ref) => {
  return <BaseContainer ref={ref} {...props} direction={'column'} />;
});

const DirectionSpacer = ({ children, direction, space }) => {
  const spaceProperty = direction === 'row' ? 'marginRight' : 'marginTop';
  return (
    <>
      {React.Children.toArray(children).map((child, index) => (
        <View key={index} style={{ [spaceProperty]: space }}>
          {child}
        </View>
      ))}
    </>
  );
};

BaseContainer.displayName = 'BaseContainer';

BaseContainer.propTypes = {
  style: PropTypes.object,
  center: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  direction: PropTypes.string,
  spaceChildren: PropTypes.number,
};

HContainer.displayName = 'HContainer';
HContainer.propTypes = BaseContainer.propTypes;

VContainer.displayName = 'VContainer';
VContainer.propTypes = BaseContainer.propTypes;
