import DateActionTypes from './date.types'
const date =new Date

const INITIAL_DATA = {
   selectedDate: date.toString(),
};

const shopReducer = (state = INITIAL_DATA, action) => {
   switch (action.type) {
      case DateActionTypes.SELECT_DATE:
         return {
            ...state,
            selectedDate: action.payload.toString()
         };

     
      default:
         return state;
   }
};

export default shopReducer;