describe('Teste de pesquisa no Google.com', () => {
    it('Deve realizar uma pesquisa com sucesso', () => {
        // Visita a página inicial do Google
        cy.visit('https://www.google.com/');
        
        // Preenche o campo de pesquisa e clica em enter
        cy.get('#APjFqb').type('Pesquisa por Google{enter}');

        // Verifica se o termo pesquisado "Pesquisa por Google" esta presente no titulo da página
        //cy.get('.dashboard').should('exist');
        cy.title().should('contain', 'Pesquisa por Google');
    });
});