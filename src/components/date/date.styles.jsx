import styled, { css } from 'styled-components';

const activeStyles = css`
   background: #424749;
   color: #fff;
`;

const hiddenStyles = css`
   color: #6e7679;
`;

const getDateWrapperStyles = (props) => {
   if (props.active) {
      return activeStyles;
   } else if (props.hidden) {
      return hiddenStyles;
   }
};

export const DateWrapper = styled.span`
   flex-shrink: 0;
   padding: 8px;
   height: 40px;
   width: 40px;
   border-radius: 50% 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: #424749;

   ${getDateWrapperStyles}
`;

export const Date = styled.span`
   font-weight: 600;
`;
export const Day = styled.span`
   font-size: 0.5em;
   text-transform: uppercase;
`;
