describe('Hometask 18', () => {
  beforeEach('Autorization', () => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });

  it('Should display all header buttons', () => {
    cy.get('.-active').should('contain.text', 'Home');
    cy.get('[appscrollto="aboutSection"]').should('contain.text', 'About');
    cy.get('[appscrollto="contactsSection"]').should('contain.text', 'Contacts');
    cy.get('.header_right > .header-link').should('contain.text', 'Guest');
    cy.get('.header_right > .btn').should('be.visible');
  });

  it('Contact exist with block sturcture', () => {
    cy.get('#contactsSection h2').should('contain.text', 'Contacts');
    cy.get('.align-items-md-start').should('exist'); 
    cy.get('.align-items-md-end').should('exist');  
    cy.get('.display-4').should('exist');            
    cy.get('.h4').should('exist');                   
  });

  it('Socialmeadia existing', () => {
    cy.get('[href="https://www.facebook.com/Hillel.IT.School"] > .socials_icon').should('be.visible');
    cy.get('[href="https://t.me/ithillel_kyiv"] > .socials_icon').should('be.visible');
    cy.get('[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"] > .socials_icon').should('be.visible');
    cy.get('[href="https://www.instagram.com/hillel_itschool/"] > .socials_icon').should('be.visible');
    cy.get('[href="https://www.linkedin.com/school/ithillel/"] > .socials_icon').should('be.visible');
  });

  it('Footer', () => {
    cy.get('.footer').should('be.visible');
    cy.get('.col-7 > :nth-child(1)').should('exist');
    cy.get('.col-7 > :nth-child(2)').should('exist');
  });
});