describe('Cypress Test',() => {
  it ('None-existent notifications test',() => {
    cy.fixture('notifications').then(data => {
      cy.log('Переxод на личную страницу')
      cy.viewport(1750, 890)
      cy.visit(data.main_url)

      cy.log('Переxод на уведомления')
      // cy.get('div[class="button button__background-color-light-blue')
      //     .click()

    })
  })
})