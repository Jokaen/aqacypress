// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('visit', (originalFn, url, ...args) => {
  originalFn(url, {
    auth: {
      username: 'guest',
      password: 'welcome2qauto'
    },
    ...args
  })
})

Cypress.Commands.add('login', {prevSubject: false} ,(username = Cypress.env('DEFAULT_USER_NAME'), password = Cypress.env('DEFAULT_USER_PASSWORD')) => {
  cy.visit('')
  cy.contains('button', 'Sign In').click();
  cy.get('[id="signinEmail"]').type(username);
  cy.get('[id="signinPassword"]').type(password, {sensitive: true});
  cy.contains('[class="modal-content"] button', 'Login').click();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})