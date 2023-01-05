import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      theme: 'light',
    };
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
});

export default store;
