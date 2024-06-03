import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given ("I am on google inicial page", () =>{
    // Visita a página inicial do Google
    cy.visit('https://www.google.com/');
})

When ("I fill the search and click enter", () =>{
    // Preenche o campo de pesquisa e clica em enter
    cy.get('#APjFqb').type('Pesquisa por Google{enter}');
})

Then ("The search will be realized sucessfull", () =>{
    // Verifica se o termo pesquisado "Pesquisa por Google" esta presente no titulo da página
    cy.title().should('contain', 'Pesquisa por Google');
})