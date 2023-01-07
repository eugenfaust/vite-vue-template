import { createStore } from 'vuex';
import theme from './modules/theme';
import drawer from './modules/drawer';
// Create a new store instance.
const store = createStore({
  modules: {
    theme,
    drawer,
  },
});

export default store;
