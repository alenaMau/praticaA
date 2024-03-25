describe('Cypress Test',() => {
  it ('None-existent login test',() => {
      cy.fixture('personal_area').then(data => {
          cy.log('Переxод на личную страницу')
          cy.visit(data.main_url)

          cy.log('Переход в уведомления')
          cy.get('a[class="router-link-active router-link-exact-active header__item"]')
            .type(data.login)

          cy.log('Ввод email')
          cy.get('input[class="form-input--email form-input"]')
            .type(data.email)

          cy.log('Ввод пароля')
          cy.get('div[class="form-control--medium form-control"]')
            .type(data.password)

          cy.log('Ввод пароля')
          cy.get('input[class="form-control--medium form-control"]')
            .type(data.password)

          cy.log('Клик по кнопке "Войти')
          cy.get('div[class="registration-form__button"] button[type="submit"]')
            .click()
      })
  })
})

