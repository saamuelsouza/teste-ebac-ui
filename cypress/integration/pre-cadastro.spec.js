    /// <reference types="cypress" />
    var faker = require('faker');

    describe('Funcionalidade pré cadastro', () => {

            beforeEach(() => {
                cy.visit('minha-conta')
            });

            it('Deve completar o pré cadastro com sucesso', () => {
                let nomefaker = faker.name.firstname()
                let sobrenomefaker = faker.name.lastname()
                let emailfaker = faker.internet.email(nomefaker)

             cy.get('#reg_email').type(emailfaker())
             cy.get('#reg_password').type('!teste@teste$')
             cy.get(':nth-child(4) > .button').click()

             cy.get('.woocommerce-MyAccount-navigation-link--editi-account > a').click()
             cy.get('#account_first_name').type(nomefaker)
             cy.get('#account_last_name').type(sobrenomefaker)
             cy.get('.woocommerce-Button').click()
             cy.get('woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

        });


    });