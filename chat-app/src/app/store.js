import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme';
import tabReducer from '../features/tab';
import contactDetailReducer from '../features/contact-detail';
import settingsSection from '../features/settings-section';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    tab : tabReducer,
    contactDetail : contactDetailReducer,
    settingsSection : settingsSection
  },
});

export default store;