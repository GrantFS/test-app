import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(logger)
});


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
