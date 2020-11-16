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

const addButtonStyles = css`
   background: #f9423a;
   font-weight: 600;
   font-size: 1em;
   color: #fff;
   text-transform: uppercase;
   padding: 8px 24px;
`;

const getCustomButtonStyles = (props) => {
   if (props.headerButton && props.active) {
      return headerButtonActiveStyles;
   } else if (props.headerButton) {
      return headerButtonStyles;
   }

   if (props.addButton) {
      return addButtonStyles;
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
