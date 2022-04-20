describe('sauce demo', function(){

it.skip('connexion standard', function(){
   cy.visit('https://www.saucedemo.com/')
   cy.get('#user-name').type('standard_user')
   cy.get('[data-test="password"]').type('secret_sauce')
   cy.get('[data-test="login-button"]').click()
   cy.get('.shopping_cart_link').should('be.visible')

   
})

it.only('connexion unloacked', function(){
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should ('include.text', 'this user has been locked out.')
})


it.skip('problem_user', function(){
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('problem_user') 
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('.shopping_cart_link').should('be.visible')

})


it.skip('performance', function(){
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('performance_glitch_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    

})
})