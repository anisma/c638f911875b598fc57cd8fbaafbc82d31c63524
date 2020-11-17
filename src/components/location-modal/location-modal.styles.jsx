import styled from 'styled-components';

export const LocationModalcontainer = styled.div`
   position: fixed;
   height: 85%;
   bottom: 0;
   width: 100%;
`;

export const LocationModalWrapper = styled.div`
   height: 100%;
   width: 100%;
   background: #fff;
   border-radius: 8px 8px 0 0;
   padding: 16px;
   display: flex;
   flex-direction: column;
   gap: 16px;

   &::before {
      content: '';
      z-index: -1;
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.5);
      top: -20%;
      left: 0;
   }
`;

export const CloseButtonWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
`;

export const Title = styled.h2`
   font-size: 20px;
   font-weight: 600;
   line-height: 1.5;
`;
