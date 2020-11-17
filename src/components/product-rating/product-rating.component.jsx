import React from 'react';
import StarBorder from '@material-ui/icons/StarBorderRounded';
import { ProductRatingWrapper, RatingValue } from './product-rating.styles';

const ProductRating = ({ rate }) => {
   const stars = [];
   for (let i = 0; i < 5; i++) {
      stars.push(
         <StarBorder
            key={i}
            style={{
               fontSize: '14px',
               color: '#f9423a',
               backgroundClip: 'text',
               // background: '#f9423a',
            }}
         />
      );
   }

   return (
      <ProductRatingWrapper>
         <RatingValue>{parseFloat(rate).toFixed(1)}</RatingValue>
         {stars}
      </ProductRatingWrapper>
   );
};

export default ProductRating;
