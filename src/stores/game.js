import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore('game', {
  state: () => ({
    // baseURL: 'http://localhost:3000',
    baseURL: 'https://setim-server.huseinhk.me',
    games: [],
    game: {},
    libraries: [],
    transactionToken: ''
  }),
  actions: {
    async fetchGames(page) {
      try {
        let path = '/games'
        if (page) {
          path += `?offset=${page}`
        }
        const { data } = await axios({
          method: 'get',
          url: this.baseURL + path
        })

        this.games = data
      } catch (error) {
        console.log(error)
      }
    },

    async fetchGameById(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseURL + '/games/' + id
        })

        this.game = data
      } catch (error) {
        console.log(error)
      }
    },

    async generateMidTransToken() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseURL + '/generate-midtrans-token',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.transactionToken = data.transactionToken
      } catch (error) {
        console.log(error)
      }
    },

    async createLibrary(id) {
      try {
        await axios({
          method: 'post',
          url: this.baseURL + '/libraries',
          data: { GameId: id },
          headers: {
            access_token: localStorage.access_token
          }
        })
      } catch (error) {
        console.log(error)
      }
    },

    async fetchLibraries() {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseURL + '/libraries',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.libraries = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
