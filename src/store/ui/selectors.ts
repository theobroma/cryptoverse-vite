import { RootState } from '@/store/configureStore';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};

export const languageSelector = (state: RootState) => {
  return state.ui.language;
};
