import AppActionTypes from './app-types'
const date = new Date

const INITIAL_DATA = {
   selectedDate: date.toString(),
   datePickerPosition: 0
};

const appReducer = (state = INITIAL_DATA, action) => {
   switch (action.type) {
      case AppActionTypes.SELECT_DATE:
         return {
            ...state,
            selectedDate: action.payload.toString()
         };

      case AppActionTypes.SWIPE_DATE_PICKER:
         return {
            ...state,
            datePickerPosition: action.payload
         }

     
      default:
         return state;
   }
};

export default appReducer;