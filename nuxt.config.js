export default {
  modules: ["nuxt-svg-loader"],
  build: {
    extend(config) {
      //fix for _vm._ssrNode is not a function for functional component
      config.module.rules.forEach(rule => {
        if (/vue/.test(rule.test.toString())) {
          rule.options.optimizeSSR = false;
        }
      });
    }
  }
};
