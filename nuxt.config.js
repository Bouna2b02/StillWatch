export default {
  modern: process.env.NODE_ENV === 'production',

  serverMiddleware: {
    '/': '~/api/swr.js',
    '/_ipx': '~/api/ipx.js'
  },

  /*
  ** App bundle process.env
  */
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL || '',
    API_KEY: process.env.API_KEY || '',
    API_LANG: process.env.API_LANG || 'en-US',
    API_COUNTRY: process.env.API_COUNTRY || 'GB',
    API_YOUTUBE_KEY: process.env.API_YOUTUBE_KEY || '',
    GA: process.env.GA || ''
  },

  build: {
    extend(config) {
      config.module.rules.unshift({
        test: /\.mjs/,
        type: 'javascript/auto',
        include: /node_modules/
      });
    }
  },

  /*
  ** Build-only modules
  */
  buildModules: [
    // '@nuxt/sigma',
    '@nuxtjs/pwa',
    '@nuxt/image',
    '@nuxtjs/svg',
    '@nuxtjs/web-vitals',
    '@nuxtjs/google-fonts'
  ],

  webVitals: {
    debug: true
  },

  googleFonts: {
    families: {
      Roboto: {
        wght: [300, 400, 500]
      }
    },
    display: 'swap'
  },

  image: {
    provider: 'ipx',
    screens: {
      // _variables.scss
      xsmall: 640,
      small: 768,
      medium: 1024,
      large: 1200,
      xlarge: 1400,
      xlarger1: 1500,
      xlarger2: 1800,
      xlarger3: 2500
    },
    ipx: {}
  },

  /*
  ** Global Plugins
  */
  plugins: [
    '~/plugins/filters',
    '~/plugins/ga.client',
    '~/plugins/search'
  ],

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/global.scss'
  ],

  /*
  ** Headers of the page
  */
  // TODO: should review and update properly
  head: {
    title: 'StillWatch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Browse Movies, TV Shows and People' },
      { hid: 'author', name: 'author', content: 'Web Avenir authors' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
      { hid: 'og:title', property: 'og:title', content: 'Movies App' },
      { hid: 'og:description', property: 'og:description', content: 'Browse Movies, TV Shows and People' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Movies' },
      { name: 'twitter:description', content: 'Browse Movies, TV Shows and People' },
      { name: 'twitter:site', content: '@iambounadiallo' },
      { name: 'twitter:creator', content: '@iambounadiallo' },
    ],
    
  },

  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#2196f3'
  },

  /*
   * Customize manifest.json
   */
  manifest: {
    name: 'Movies',
    short_name: 'Movies',
    description: 'Browse Movies, TV Shows and People',
    theme_color: '#2196f3',
    background_color: '#000000'
  }
};
