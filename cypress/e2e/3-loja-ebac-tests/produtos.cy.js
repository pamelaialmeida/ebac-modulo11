/// <reference types="cypress" />

describe('Testes da funcionalidade de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Deve selecionar um produto da lista', () =>{
        cy.get('[class="product-block grid"]').first().click()
        
        cy.get('[class="woocommerce-product-details__short-description"]').should('contain', 'This is a variable product called')
    })

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 1

        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

    })
})