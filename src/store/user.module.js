export default {
  namespaced: true,
  state: {
    firstName: 'João',
    lastName: 'Miguel'
  },
  getters: {
    fullName: function(state) {
      return `${state.firstName} ${state.lastName}`
    }
  }
}