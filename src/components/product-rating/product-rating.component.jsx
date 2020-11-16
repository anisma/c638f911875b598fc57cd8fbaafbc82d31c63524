import React from 'react';
import StarBorder from '@material-ui/icons/StarBorderRounded';
import { ProductRatingWrapper, RatingValue } from './product-rating.styles';

const ProductRating = () => {
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
         <RatingValue>4.5</RatingValue>
         {stars}
      </ProductRatingWrapper>
   );
};

export default ProductRating;
