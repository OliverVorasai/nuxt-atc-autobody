export const state = () => ({
  business_info: null,
})

export const mutations = {
  SET_BUSINESS_INFO(state, value) {
    state.business_info = value
  },
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const body = await context.$strapi.find('business-info')
    commit('SET_BUSINESS_INFO', body)
  },
}
