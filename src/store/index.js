import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: [],
    arr1:[],
    cityid: "",
    cityname: "城市∨",
    mos: {},
    cis: {},
    actives:""
  },
  getters: {
  },
  mutations: {
    setactives(state, payload){
     state.actives = payload
   },
  
    setcityid(state, payload) {
      state.cityid = payload
    },
    setmos(state, payload) {
      state.mos = payload
    },
    setcis(state, payload) {
      state.cis = payload
    },
    seturl(state, payload) {
      state.arr.push(payload)
    },
    deturl(state) {
      state.arr.splice(0, 1)
    },
    citynames(state,payload){
      state.cityname=payload
    },
    setImgAndText(state,payload){
      state.arr1.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
