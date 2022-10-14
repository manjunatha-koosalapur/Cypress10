const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    projectId: "x51ui9",
    watchForFileChanges: true,
    defaultCommandTimeout: 4000,
    retries: 2,
    // baseUrl: "https://opensource-demo.orangehrmlive.com/",
    // baseUrl: "http://localhost:3000/"
    setupNodeEvents(on, config) {
      on('task', {downloadFile}) 
    },
  },
});
