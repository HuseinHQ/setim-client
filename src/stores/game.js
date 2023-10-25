import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore('game', {
  state: () => ({
    baseURL: 'http://localhost:3000',
    games: []
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
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
