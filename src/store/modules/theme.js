// initial state
// shape: [{ id, quantity }]
const state = () => ({
  current: 'light',
});
// mutations
const mutations = {
    setTheme(state, theme) {
        state.current = theme;
    }
};

export default {
  namespaced: true,
  state,
  mutations,
};
