import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    baseURL: 'http://localhost:3000',
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
    }
  }
})
