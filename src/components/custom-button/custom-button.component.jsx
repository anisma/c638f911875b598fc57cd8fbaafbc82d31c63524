import React from 'react';
import { CustomButtonWrapper } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => {
   return <CustomButtonWrapper {...props}>{children}</CustomButtonWrapper>;
};

export default CustomButton;
