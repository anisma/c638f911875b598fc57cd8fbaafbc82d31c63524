import styled from 'styled-components';

export const LocationInputWrapper = styled.div`
   width: 100%;
   position: relative;
`;

export const SearchInput = styled.input`
   width: 100%;
   padding: 8px 16px;
   padding-left: 40px;
   outline: none;
   border: 1px solid #e2e4e4;
   border-radius: 8px;
   caret-color: #f9423a;
   line-height: 1.5;
`;

export const IconWrapper = styled.div`
   position: absolute;
   height: 42px;
   width: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 0;
   left: 0;
   color: #f9423a;
`;
