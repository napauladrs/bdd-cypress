
describe('Login', () => {

    before(() => {
        cy.visit('https://training-wheels-protocol.herokuapp.com/login')
        cy.get('#login').should('be.visible')
    })

    it('quando submeto minhas credenciais', () => {
        cy.get('#userId').type('stark')
        cy.get('#passId').type('jarvis!')
        cy.get('.btn-login').click()
    })

    it ('então devo ver a área logada', () => {
        cy.get('#flash').should('contain', 'Você acessou a área logada!')
    })
})