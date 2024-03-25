describe('Cypress Test',() => {
    it ('None-existent login test',() => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переxод на страницу автозации')
            cy.visit(data.main_url)

            cy.log('Ввод несуществующего логина')
            cy.get('input[id="passp-field-login"]')
                .type(data.none_existent_login)
            cy.log('Клик по кнопке "Войти')
            cy.get('div[class="passp-button passp-in-button"] button[type="submit"]')
                .click()
            cy.log('Проверка что появилсяэлемент сигнализирующий об ощибке')
            cy.get('div[class="pass-form-field_error"]')
                .should('exist')
        })
    })
})
