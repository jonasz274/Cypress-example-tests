const { defineConfig } = require("cypress");
 
module.exports = defineConfig({

 // video: true,
 // videoCompression: 32,
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
 
 