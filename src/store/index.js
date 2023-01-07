import { createStore } from 'vuex';
import theme from './modules/theme';
// Create a new store instance.
const store = createStore({
  modules: {
    theme,
  },
});

export default store;
