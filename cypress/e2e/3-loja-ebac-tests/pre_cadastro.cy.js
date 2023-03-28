/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Testes da funcionalidade de Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })

    it('Deve completar o pré cadastro com sucesso', () => {
        let nome = faker.name.firstName()
        let email = faker.internet.email(nome)

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('Teste@1234')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

})