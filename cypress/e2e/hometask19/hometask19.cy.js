describe('Hometask 19', () => {
  beforeEach('Autorization', () => {
    cy.visit('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }
    });
  });

  it('Sign Up: Name properties checker', () => {
    cy.contains('button', 'Sign up').should('be.visible').click()

    // Тригерим помилку пустого поля
    cy.get('[id=signupName]') 
        .should('be.visible')
        .focus()
        .blur()
    cy.contains('Name required').should('be.visible')

    // Робимо граничне тестування нижче мінімального 
    cy.get('[id=signupName]')
        .focus()
        .type('1')
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible')

    // Очистили полю вводу і перевірили максимальне граничне значення
    cy.get('[id=signupName]')
        .clear()
        .type('123451234512345123451')
        .blur()
    cy.contains('Name has to be from 2 to 20 characters long').should('be.visible')

    // Перевірямо на валідність введеного імя
    cy.get('[id=signupName]')
        .clear()
        .type('цшопцзмоцмьцмц')
        .blur()
    cy.contains('Name is invalid').should('be.visible')

    // Певіряємо чи підсвічується червоним поле ввода
    cy.get('[id=signupName]').should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get('[class=close]').click()
  });

  it('Sign Up: Last Name properties checker', () => {
    cy.contains('button', 'Sign up').should('be.visible').click()

    // Тригерим помилку пустого поля
    cy.get('[id="signupLastName"]') 
        .should('be.visible')
        .focus()
        .blur()
    cy.contains('Last name required').should('be.visible')

    // Робимо граничне тестування нижче мінімального 
    cy.get('[id="signupLastName"]')
        .focus()
        .type('1')
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible')

    // Очистили полю вводу і перевірили максимальне граничне значення
    cy.get('[id=signupLastName]')
        .clear()
        .type('123451234512345123451')
        .blur()
    cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible')

    // Перевірямо на валідність введеного ласт нейму
    cy.get('[id=signupLastName]')
        .clear()
        .type('цшопцзмоцмьцмц')
        .blur()
    cy.contains('Last name is invalid').should('be.visible')

    // Певіряємо чи підсвічується червоним поле ввода
    cy.get('[id=signupLastName]').should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get('[class=close]').click()
  })

  it('Sign Up: Email properties checker', () => {
    cy.contains('button', 'Sign up').should('be.visible').click()

    // Тригерим помилку пустого поля
    cy.get('[id=signupEmail]') 
        .should('be.visible')
        .focus()
        .blur()
    cy.contains('Email required').should('be.visible')

    // Перевірямо на валідність введеного мейлу
    cy.get('[id=signupEmail]')
        .clear()
        .type('цшопцзмоцмьцмц')
        .blur()
    cy.contains('Email is incorrect').should('be.visible')

    // Певіряємо чи підсвічується червоним поле ввода
    cy.get('[id=signupEmail]').should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get('[class=close]').click()
  })

  it('Sign Up: Password properties checker', () => {
    cy.contains('button', 'Sign up').should('be.visible').click()

    // Тригерим помилку пустого поля
    cy.get('[id=signupPassword]') 
        .should('be.visible')
        .focus()
        .blur()
    cy.contains('Password required').should('be.visible')

    // Перевіряємо граничні значення: Перевірка нижче допустимої кількості символів
    cy.get('[id=signupPassword]') 
        .focus()
        .type('Qwerty1')
        .blur()
    cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should('be.visible')

    // Перевіряємо граничні значення: Перевірка вище допустимої кількості символів
    cy.get('[id=signupPassword]') 
        .clear()
        .type('Qwerty1827tyuisq')
        .blur()
    cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should('be.visible')

    // Перевіряємо граничні значення: Перевірка на відсутність заглавної літери
    cy.get('[id=signupPassword]') 
        .clear()
        .type('qwerty123')
        .blur()
    cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should('be.visible')

    // Перевіряємо граничні значення: Перевірка на відсутність цифер
    cy.get('[id=signupPassword]') 
        .clear()
        .type('qwerty123')
        .blur()
    cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should('be.visible')

    // Перевіряємо граничні значення: Перевірка на відсутність маленьких літер
    cy.get('[id=signupPassword]') 
        .clear()
        .type('QWERTY123')
        .blur()
    cy.contains("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter").should('be.visible')

    // Певіряємо чи підсвічується червоним поле ввода
    cy.get('[id=signupPassword]').should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get('[class=close]').click()
  })

  it('Sign Up: Re-enter password properties checker', () => {
    cy.contains('button', 'Sign up').should('be.visible').click()

    // Тригерим помилку пустого поля
    cy.get('[id=signupRepeatPassword]') 
        .should('be.visible')
        .focus()
        .blur()
    cy.contains('Re-enter password required').should('be.visible')

    // Викликаємо помилку не співпадіння паролів
    cy.get('[id=signupPassword]').type('Qwerty123')
    cy.get('[id=signupRepeatPassword]').type('Qwerty1234')
    cy.contains('Passwords do not match').should('be.visible')

    // Певіряємо чи підсвічується червоним поле ввода
    cy.get('[id=signupRepeatPassword]').should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get('[class=close]').click()
  })

  it('Sign Up: Register button checker', () => {
    cy.contains('button', 'Sign up').should('be.visible').click()

    cy.get('[id=signupName]').type('Kaiden')
    cy.get('[id="signupLastName"]').type('Kamui')
    cy.get('[id=signupEmail]').type('kaidenkamui@gmail.com')
    cy.get('[id=signupPassword]').type('Qwerty123')
    cy.get('[id=signupRepeatPassword]').type('Qwerty1234')
    cy.contains('button', 'Register').should('be.disabled')

    cy.get('[id=signupRepeatPassword]').clear().type('Qwerty123')
    cy.contains('button', 'Register').should('not.be.disabled')

    cy.get('[class=close]').click()
  })
});