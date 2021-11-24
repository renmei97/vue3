import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import { IRootState, IStoreType } from './types'
import { getPageListData } from '@/service/main/system/system'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coder',
      age: 18,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    },
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 100
      })
      const { list: departmentList } = departmentResult.data
      console.log(8, departmentResult)
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 100
      })
      console.log(9, roleResult)
      const { list: roleList } = roleResult.data
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
