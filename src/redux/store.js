import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactReducer';

export const rootReducer = combineReducers({
  contacts: contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
