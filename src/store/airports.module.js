export default {
  state: {
    favorites: []
  },
  mutations: {
    UPDATE_FAVORITES(state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    addToFavorites(context, payload) {
      const favorites = context.state.favorites
      favorites.push(payload)
      context.commit('UPDATE_FAVORITES', favorites)
    },
    removeToFavorites(context, payload) {
      const favorites = context.state.favorites
      const index = favorites.indexOf(payload)
      if(index >= 0) {
        favorites.splice(index, 1)
      }
      context.commit('UPDATE_FAVORITES', favorites)
    }
  }
}