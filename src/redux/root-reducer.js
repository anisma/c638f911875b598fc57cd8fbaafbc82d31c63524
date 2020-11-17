import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dateReducer from './date/date-reducer' 

const persistConfig = {
   key: 'root',
   storage,
};

const rootReducer = combineReducers({ date: dateReducer
   
});

export default persistReducer(persistConfig, rootReducer);
