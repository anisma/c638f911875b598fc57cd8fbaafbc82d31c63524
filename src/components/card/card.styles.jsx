import styled from 'styled-components';

export const CardWrapper = styled.div`
   width: 300px;
   flex-grow: 2;
   background: #fff;
   border-radius: 8px;
   box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
   overflow: hidden;
`;

export const Image = styled.div`
   background-image: url(${(props) => props.image});
   background-position: center;
   background-size: cover;
   height: 300px;
`;

export const CardBody = styled.div`
   padding: 16px;
`;

export const Title = styled.h2`
   font-weight: 600;
   text-transform: capitalize;
   line-height: 1.5;
`;

export const Subtitle = styled.h3`
   font-weight: 600;
   font-size: 0.75em;
   color: #6e7679;
   line-height: 1.5;
`;

export const BottomWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-top: 16px;
`;

export const Price = styled.span`
   font-weight: 600;
`;
