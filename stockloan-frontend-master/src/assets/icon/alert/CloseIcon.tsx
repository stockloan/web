import React from 'react';

import BaseIcon from './BaseIcon';

export interface ICloseIconProps {
  colorProps: string;
}

const CloseIcon = ({ colorProps }: ICloseIconProps) => (
  <BaseIcon color={colorProps} pushRight={false}>
    <>
      <line x1='18' y1='6' x2='6' y2='18' />
      <line x1='6' y1='6' x2='18' y2='18' />
    </>
  </BaseIcon>
);

export default CloseIcon;
