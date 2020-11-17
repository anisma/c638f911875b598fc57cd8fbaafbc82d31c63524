import AppActionTypes from './app-types'
const date = new Date

const INITIAL_DATA = {
   selectedDate: date.toString(),
};

const appReducer = (state = INITIAL_DATA, action) => {
   switch (action.type) {
      case AppActionTypes.SELECT_DATE:
         return {
            ...state,
            selectedDate: action.payload.toString()
         };

     
      default:
         return state;
   }
};

export default appReducer;