import { createStore } from 'vuex'
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'

export default createStore({
  state: {
    user: {
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
    CLEAR_TOKEN(state, value) {
      state.user.token = value
    }
  },
  actions: {
    async logIn(context, { email, password }) {
      const auth = getAuth()
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('SET_USER', email)
        context.commit('SET_LOGGED_IN', true)
        context.commit('SET_TOKEN', response._tokenResponse.idToken)

        const resp = context.getters.user.loggedIn
        console.log(resp)
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

      const resp = context.getters.user.loggedIn
      console.log(resp)
    }
    // async fetchUser(context, user) {
    //   context.commit('SET_LOGGED_IN', user !== null)
    //   if (user) {
    //     context.commit('SET_USER', {
    //       displayName: user.displayName,
    //       email: user.email
    //     })
    //   } else {
    //     context.commit('SET_USER', null)
    //   }
    // }
  },
  modules: {}
})
