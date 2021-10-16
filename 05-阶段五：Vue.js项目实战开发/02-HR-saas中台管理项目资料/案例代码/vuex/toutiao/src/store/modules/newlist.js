import axios from 'axios'
export default {
  namespaced: true,
  state: {
    allData: {} // 放置的是所有的数据   { 分类id: 列表1， 分类id：列表2  }
  },
  mutations: {
    // payload 载荷  { 1: [], 2: [], 3: [], 4}
    updateList (state, { currentCatagtory, list }) {
      // 不是响应式的
      // state.allData[currentCatagtory] = list // 这样做事大错特错第  感觉不到变化 就不会通知组件
      state.allData = { ...state.allData, [currentCatagtory]: list }
      // 这句代码的含义 就相当于 在一个新的对象后面追加了一个属性  更新某个属性的内容
    }
  },
  actions: {
    // 获取新闻列表数据
    // 分类id只能通过传递的方式传进来
    async getNewList (context, cataId) {
      const { data: { data: { results } } } = await axios.get(`http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`)
      // results是新闻列表
      context.commit('updateList', { currentCatagtory: cataId, list: results })
    }
  }
}
