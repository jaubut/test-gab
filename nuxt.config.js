module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'gabriel-construction-chanvre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Le site officiel de GCC. ' },
      { name: "theme-color", content: "#ffffff"}
    ],
    script: [
      { src: "https://use.fontawesome.com/d6228aec41.js" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "mask-icon", href:"/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },
  css: [
    '~/assets/css/main.styl'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    'plugins/element-ui.js'
  ],
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-carousel']
  }
}
