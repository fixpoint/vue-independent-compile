import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface State {
  count: number;
}

export const module = {
  state: () => ({
    count: 0,
  }),
  getters: {},
  mutations: {
    increment(state: State, val: number) {
      state.count += val;
    },
    reset(state: State, val: number) {
      state.count = val;
    },
  },
  actions: {},
  modules: {},
};

export default new Vuex.Store(module);
