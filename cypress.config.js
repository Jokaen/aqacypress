import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
