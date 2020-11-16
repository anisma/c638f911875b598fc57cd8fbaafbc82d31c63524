import styled from 'styled-components';

export const HeaderContainer = styled.div`
   padding: 0 16px;
   border-bottom: 1px solid #f1f1f2;
`;

export const HeaderWrapper = styled.header`
   /* height: 40px; */
   width: 100%;
   display: flex;
   align-items: center;
   /* padding: 8px 0; */
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
   align-item: center;
`;

export const SubText = styled.span`
   font-size: 0.5em;
   color: #6e7679;
   text-transform: uppercase;
   padding: 4px 0;
`;
