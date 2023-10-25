import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://setim-server.huseinhk.me',
    isAuthenticated: localStorage.access_token ? true : false
  }),
  actions: {
    async login(username, password) {
      try {
        const { data } = await axios({
          method: 'post',
          url: this.baseURL + '/login',
          data: { username, password }
        })

        this.isAuthenticated = true
        return data
      } catch (error) {
        console.log(error)
        return error
      }
    },

    async register(email, username, password) {
      try {
        console.log({ email, username, password })
        await axios({
          method: 'post',
          url: this.baseURL + '/register',
          data: { email, username, password }
        })

        const data = await this.login(username, password)
        return data
      } catch (error) {
        console.log(error)
        return error
      }
    }
  }
})
