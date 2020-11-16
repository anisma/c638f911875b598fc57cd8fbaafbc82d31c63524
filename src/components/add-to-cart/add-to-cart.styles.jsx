import styled from 'styled-components';

export const AddToCartContainer = styled.div`
   padding: 0 16px;
   width: 100vw;
   position: fixed;
   bottom: 16px;
`;

export const AddToCartWrapper = styled.div`
   width: 100%;
   padding: 16px 16px;
   background: #a23530;
   border-radius: 8px;
   display: flex;
   justify-content: space-between;
   z-index: 6;

   &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: -16px;
      left: 0;
      z-index: -9;
      background-image: linear-gradient(
         to bottom,
         rgba(255, 255, 255, 0),
         #ffffff
      );
   }
`;

export const Content = styled.div`
   height: auto;
`;

export const TextWrapper = styled.div`
   display: flex;
   font-weight: 600;
   color: #fff;
   font-size: 14px;
   /* line-height: 1.5; */
   padding: 0;
`;

export const SubText = styled.span`
   font-weight: 400;
   color: #fff;
   font-size: 12px;
`;

export const WrapperRight = styled.div`
   display: flex;
   color: #fff;
`;
