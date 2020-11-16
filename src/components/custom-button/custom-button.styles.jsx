import styled, { css } from 'styled-components';

const headerButtonStyles = css`
   border: 2px solid #f1f1f2;
   width: 50%;
   color: #6e7679;
`;

const headerButtonActiveStyles = css`
   background: #424749;
   width: 50%;
   color: #fff;
`;

const getCustomButtonStyles = (props) => {
   if (props.headerButton && props.active) {
      return headerButtonActiveStyles;
   } else if (props.headerButton) {
      return headerButtonStyles;
   }
};

export const CustomButtonWrapper = styled.button`
   outline: none;
   background: transparent;
   border: none;
   padding: 12px;
   border-radius: 8px;

   ${getCustomButtonStyles}
`;
