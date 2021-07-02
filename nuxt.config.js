export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxtjs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My astonishing Nuxt.js project",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  modules: ["bootstrap-vue/nuxt", "@nuxtjs/style-resources", "@nuxtjs/axios"],
  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true,
    icons: true,
  },
  axios: {
    baseURL: "http://localhost:4000",
    proxy: true,
    retry: { retries: 2 },
  },
  proxy: {
    "/api/": "http://api.example.com",
    "/api2/": "http://localhost:4000",
  },

  styleResources: {
    scss: ".assets/scss/*.scss",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
