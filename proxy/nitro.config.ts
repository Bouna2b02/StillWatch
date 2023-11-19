import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  routeRules: {
    '/**': { cors: true },
  },
  runtimeConfig: {
    tmdb: {
      apiKey: process.env.TMDB_API_KEY || '',
    },
  },
})
