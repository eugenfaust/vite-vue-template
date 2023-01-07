// initial state
// shape: [{ id, quantity }]
const state = () => ({
    open: false,
  });
  // mutations
  const mutations = {
      setOpen(state, status) {
          state.open = status;
      }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
  };
  