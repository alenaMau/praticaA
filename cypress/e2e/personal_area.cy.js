describe('Cypress Test',() => {
    it ('None-existent login test',() => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переxод на страницу авторизации')
            cy.viewport(1750, 890)
            cy.visit(data.main_url)
            cy.log('Ввод несуществующего логина')
            cy.get('input[class="form-input--text form-input"]')
                .type(data.login)
            cy.log('Ввод несуществующего пароля')
            cy.get('input[class="form-input--password form-input"]')
                .type(data.password)
            cy.log('Клик по кнопке "Войти')
            cy.get('div[class="login-form__button"] button[type="submit"]')
                .click()
            cy.wait(1500)
            cy.get('.header__nav > [href="/notification"]')
                .click()
            cy.log('Переxод на уведомления')
            cy.wait(1500)
            cy.log('Чтение всех уведомления')
            cy.get('.notification-title > .link')
                .click()
            cy.log('Переход на определеное уведомление')
            cy.get(':nth-child(1) > .notification-list-item > .button')
                .click()
            cy.log('Переxод на рабочее пространство')
            cy.wait(1500)
            cy.get(':nth-child(1) > .responses-list-item__content-company > .button')
                .click()
            cy.log('Открытый чат')
        })
    })
})


