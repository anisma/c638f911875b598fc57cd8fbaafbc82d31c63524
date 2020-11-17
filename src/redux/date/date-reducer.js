import DateActionTypes from './date.types'

const INITIAL_DATA = {
   selectedDate: new Date(),
};

const shopReducer = (state = INITIAL_DATA, action) => {
   switch (action.type) {
      case DateActionTypes.SELECT_DATE:
         return {
            ...state,
            selectedDate: action.payload
         };

     
      default:
         return state;
   }
};

export default shopReducer;