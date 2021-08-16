import { combineReducers } from '@reduxjs/toolkit';
import users from "./slices/users";
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  users: persistReducer(persistConfig, users),
})
