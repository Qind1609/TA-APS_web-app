import { configureStore } from '@reduxjs/toolkit';
import { rootReducer, middleware } from 'redux/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(...middleware)
});

export default store;