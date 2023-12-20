/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    }); 
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq()
        .contains('Ariel Roll Sleev Sweatshirt')
        .click()
     });

     it('Deve adicionar um produto no carrinho', () => {
        var quantidade = 10 

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleev Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)

        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain' , quantidade + 'x "Ariel Roll Sleev Sweatshirt" foram adicionados no seu carrinho.')
     
    });

it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
    cy.addProdutos('Ariel Roll Sleev Sweatshirt', 'XS', 'Red', '5')
})

});