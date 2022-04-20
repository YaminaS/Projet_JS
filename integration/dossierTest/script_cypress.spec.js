/// <reference types="cypress"/>

describe ('Suite de test JS', function (){

it ('Scénario tout faux', function(){
   cy.visit("cypress/integration/index.html");
   cy.get ("#question1a").click();
   cy.get ("#question2c").click();
   cy.get ("#button").click();
   
   cy.get("#check1").should ("be.visible").and("contains.text", "Mauvaise réponse pour la question 1") 
   cy.get("#reponse").should ("be.visible").and("contains.text", "Mauvaise réponse pour la question 2") 

});


    it ('Scénario tout ok', function(){
       cy.visit("cypress/integration/index.html");
       cy.get ("#question1c").click();
       cy.get ("#question2b").click();
       cy.get ("#button").click();
       
       cy.get("#check1").should ("be.visible").and("contains.text", "Bonne réponse pour la question 1") 
       cy.get("#reponse").should ("be.visible").and("contains.text", "Bonne réponse pour la question 2") 

    
    });
    
    it ('Scénario 1 ok sur 2', function(){
        cy.visit("cypress/integration/index.html");
        cy.get ("#question1a").click();
        cy.get ("#question2b").click();
        cy.get ("#button").click();
        
        cy.get("#check1").should ("be.visible").and("contains.text", "Mauvaise réponse pour la question 1") 
        cy.get("#reponse").should ("be.visible").and("contains.text", "Bonne réponse pour la question 2") 
 
     
     });
     
     })