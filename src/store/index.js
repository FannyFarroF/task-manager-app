import { createStore } from 'vuex'
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  createUserWithEmailAndPassword
} from 'firebase/auth'

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {
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
    SET_DATA_USER(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    CLEAR_DATA_USER(state) {
      state.user = {
        uuid: null,
        token: null,
        loggedIn: false,
        email: null
      }
      localStorage.removeItem('user')
    }
  },
  actions: {
    synchronizeLocalStorage(context) {
      const userData = {
        user: context.getters.user.email,
        token: context.getters.user.token,
        uuid: context.getters.user.uuid,
        loggedIn: context.getters.user.loggedIn
      }
      localStorage.setItem('user', JSON.stringify(userData))
    },
    async logIn(context, { email, password }) {
      const auth = getAuth()
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        const user = {
          email: email,
          token: response._tokenResponse.idToken,
          uuid: response.user.uid,
          loggedIn: true
        }
        context.commit('SET_DATA_USER', user)
        this.dispatch('synchronizeLocalStorage')
      } else {
        throw new Error('login failed')
      }
    },
    async register(context, { email, password }) {
      const auth = getAuth()
      const response = await createUserWithEmailAndPassword(auth, email, password)

      if (response) {
        const user = {
          email: email,
          token: response._tokenResponse.idToken,
          uuid: response.user.uid,
          loggedIn: true
        }
        context.commit('SET_DATA_USER', user)
        this.dispatch('synchronizeLocalStorage')
      } else {
        throw new Error('login failed')
      }
    },
    async logOut(context) {
      const auth = getAuth()
      await signOut(auth)
      context.commit('CLEAR_DATA_USER')
    }
  },
  modules: {}
})
