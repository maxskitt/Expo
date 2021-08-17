import { combineReducers } from '@reduxjs/toolkit';
import articles from "./slices/articles";
import { persistReducer } from "redux-persist";
import { reducer as formReducer } from 'redux-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  articles: persistReducer(persistConfig, articles),
  form: persistReducer(persistConfig, formReducer),
})
