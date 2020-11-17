import styled from 'styled-components';

export const LocationPreviewWrapper = styled.div`
   width: 100%;
   padding: 0 16px 0 8px;
   display: flex;
   align-items: center;
`;
export const IconWrapper = styled.div`
   height: 24px;
   width: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #6e7679;
   background: #e2e4e4;
   border-radius: 50% 50%;
   flex-shrink: 0;
`;

export const TextWrapper = styled.div`
   padding: 16px;
   padding-right: 24px;
   border-bottom: 1px solid #f1f1f2;
   line-height: 1.5pc;
   width: 100%;
`;

export const Title = styled.h3`
   font-weight: 600;
`;

export const Address = styled.p`
   font-size: 12px;
   color: #6e7679;
   text-transform: capitalize;
   text-overflow: ellipsis;
   overflow: hidden;
   width: 100%;
   white-space: nowrap;
   line-height: 1.5;
`;
