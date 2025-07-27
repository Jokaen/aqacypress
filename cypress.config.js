import { defineConfig } from "cypress";
import * as path from 'path';
import * as fs from 'fs';

const getConfigFileObject = (env = 'prod') => {
  const configFilePath = path.join('cypress', 'fixtures', 'config', `cypress.env.${env}.json`);
  const configFileString = (fs.readFileSync(configFilePath)).toString();
  return JSON.parse(configFileString);
}

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/hometask21/',
    baseUrl: 'https://qauto.forstudy.space',
    reporter: "mochawesome",
    reporterOptions: {
      overwrite: false,
      json: true
    },


    setupNodeEvents(on, config) {
      const configOverrides = getConfigFileObject(process.env.TEST_ENVIRONMENT || 'prod') 
      const envDefaultVars = {...config.env};
      config = {...config, ...configOverrides}
      config.env = {...config.env, ...envDefaultVars}
      console.log(config.baseUrl);
      return config;
    },
  },
});
