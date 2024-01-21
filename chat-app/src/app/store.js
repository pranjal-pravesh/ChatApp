import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme';
import tabReducer from '../features/tab';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    tab : tabReducer
  },
});

export default store;