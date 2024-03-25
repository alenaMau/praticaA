describe('Cypress Test',() => {
  it ('None-existent login test',() => {
      cy.fixture('registration').then(data => {
          cy.log('Переxод на страницу регистрации')
          cy.visit(data.main_url)

          cy.log('Ввод логина')
          cy.get('input[autocomplete="username"]')
            .type(data.login)

          cy.log('Ввод email')
          cy.get('input[class="form-input--email form-input"]')
            .type(data.email)

          cy.log('Ввод пароля')
          cy.get('div[class="registration-form__label"]:nth-child(3)').find('input[autocomplete="new-password"]')
            .type(data.password)

          cy.log('Ввод пароля')
          cy.get('div[class="registration-form__label"]:nth-child(4)').find('input[autocomplete="new-password"]')
            .type(data.password)

          cy.log('Клик по кнопке "Войти')
          cy.get('div[class="registration-form__button"] button[type="submit"]')
            .click()
      })
  })
})

