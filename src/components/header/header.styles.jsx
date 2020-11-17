import styled from 'styled-components';

export const HeaderContainer = styled.div`
   border-bottom: 1px solid #f1f1f2;
   position: fixed;
   background: #fff;
   top: 0;
   width: 100vw;
`;

export const HeaderWrapper = styled.header`
   display: flex;
   align-items: center;
   padding: 0 16px;
`;

export const LocationWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 12px;
`;

export const Text = styled.span`
   font-size: 1em;
   color: #424749;
   font-weight: 600;
   display: flex;
   align-items: center;
`;

export const SubText = styled.span`
   font-size: 0.5em;
   color: #6e7679;
   text-transform: uppercase;
   padding: 4px 0;
`;

export const ButtonWrapper = styled.div`
   width: 100vw;
   border-top: 1px solid #f1f1f2;
   display: flex;
   padding: 8px 16px;
   background: #fff;
`;
