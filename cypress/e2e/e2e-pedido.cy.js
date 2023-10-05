/// <reference types="cypress" />

describe('Teste de ponta a ponta em Saucelabs', () => {
    
    beforeEach(() => {
        cy.visit('/')
    });
    
    

    it('Deve fazer o pedido de ponta a ponta', () => {
        

        //login
        cy.login('standard_user', 'secret_sauce')

        

        //Adicionar produto
        cy.addProduto('Sauce Labs Backpack')
        cy.addProduto('Sauce Labs Bike Light')

       
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        
        //Cadastro
        cy.cadastro('Jean', 'Viana', '69080-350')
        
        cy.get('[data-test="finish"]').click()
        
        cy.get('.complete-header').should('contain', 'Thank you for your order!')
    });
});