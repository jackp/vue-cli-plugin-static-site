/**
 * @vue/cli Configuration
 * - https: //cli.vuejs.org/config/#vue-config-js
 */

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      },
      postcss: {
        plugins: {
          "postcss-font-magician": {},
          autoprefixer: {}
        }
      }
    }
  }
};
