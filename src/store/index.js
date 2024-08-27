import { createStore } from 'vuex'
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  createUserWithEmailAndPassword
} from 'firebase/auth'

export default createStore({
  state: {
    user: {
      uuid: null,
      token: null,
      loggedIn: false,
      email: null
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    token(state) {
      return state.token
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_USER(state, value) {
      state.user.email = value
    },
    SET_TOKEN(state, value) {
      state.user.token = value
    },
    SET_UUID_USER(state, value) {
      state.user.uuid = value
    },
    CLEAR_TOKEN(state, value) {
      state.user.token = value
    }
  },
  actions: {
    async logIn(context, { email, password }) {
      const auth = getAuth()
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        console.log(response)
        context.commit('SET_USER', email)
        context.commit('SET_LOGGED_IN', true)
        context.commit('SET_TOKEN', response._tokenResponse.idToken)
        context.commit('SET_UUID_USER', response.user.uid)
      } else {
        throw new Error('login failed')
      }
    },
    async register(context, { email, password }) {
      const auth = getAuth()
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('SET_USER', email)
        context.commit('SET_LOGGED_IN', true)
        context.commit('SET_TOKEN', response._tokenResponse.idToken)
        context.commit('SET_UUID_USER', response.user.uid)
      } else {
        throw new Error('login failed')
      }
    },
    async logOut(context) {
      const auth = getAuth()
      await signOut(auth)
      context.commit('SET_USER', null)
      context.commit('SET_LOGGED_IN', false)
      context.commit('SET_TOKEN', null)
    }
  },
  modules: {}
})
