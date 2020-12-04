export const state = () => ({
  business_info: null,
})

export const mutations = {
  SET_BUSINESS_INFO(state, value) {
    if (Object.prototype.hasOwnProperty.call(value, 'open_hour')) {
      const datetime = new Date('1970-01-01T' + value.open_hour)
      value.open_hour = datetime.toLocaleTimeString([], { hour: '2-digit' })
    }
    if (Object.prototype.hasOwnProperty.call(value, 'close_hour')) {
      const datetime = new Date('1970-01-01T' + value.close_hour)
      value.close_hour = datetime.toLocaleTimeString([], { hour: '2-digit' })
    }
    state.business_info = value
  },

  SET_BEFORE_AND_AFTERS(state, value) {
    value.forEach((item) => {
      item.before.url = process.env.strapiBaseUri + item.before.url
      item.after.url = process.env.strapiBaseUri + item.after.url
      item.model = 0
    })
    state.before_and_afters = value
  },
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const body = await context.$strapi.find('business-info')
    commit('SET_BUSINESS_INFO', body)

    const beforeAndAfters = await context.$strapi.find('before-and-afters')
    commit('SET_BEFORE_AND_AFTERS', beforeAndAfters)
  },
}
