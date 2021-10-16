import axios from 'axios'
export default {
  namespaced: true,
  state: {
    //   存放分类数组的属性
    catagtory: [],
    currentCatagtory: '' // 当前激活的分类
  },
  mutations: {
    // 会认为载荷是要更新的数组
    updateCatagtory (state, payload) {
      state.catagtory = payload // 赋值分类
    },
    // 更新当前的激活分类
    updateCurrentCatagtory (state, payload) {
      state.currentCatagtory = payload
    }
  },
  actions: {
    async getCatagtory (context) {
      // promise
      // async/await
      // axios 默认包了一层data的数据结构
      const { data: { data: { channels } } } = await axios.get('http://ttapi.research.itcast.cn/app/v1_0/channels')
      // 需要通过mutation才能修改state
      context.commit('updateCatagtory', channels) // 更新数组
      context.commit('updateCurrentCatagtory', channels[0].id) // 更新当前激活id
    }
  }
}
