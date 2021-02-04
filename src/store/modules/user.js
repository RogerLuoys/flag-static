
// initial state
// shape: [{ id, quantity }]
const state = () => ({
  isLoginVisible: false
})

// mutations
const mutations = {
  setLoginVisible (state, visible) {
    state.isLoginVisible = visible
  }
}

export default {
  // namespaced: true,
  state,
  mutations
}