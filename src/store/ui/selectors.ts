// import { RootState } from '@/store/configureStore';

import { RootState } from '../configureStore';

export const themeSelector = (state: RootState) => {
  return state.ui.theme;
};
