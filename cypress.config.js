const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportHeight:900,
  viewportWidth:1440,
  e2e: {
    baseURL: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

