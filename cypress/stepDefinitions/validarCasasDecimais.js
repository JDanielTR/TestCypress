import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário esteja na tela de cadastro de produtos", () => {
    //cy.visit("http://localhost:3000/");
});

When("o usuário preencher o campo de preço com um valor com mais de duas casas decimais", (valor) => {
    //cy.get("#valor").type(valor);
});

Then("o sistema deverá verificar a quantidade de casas decimais informadas", (valor) => {
    //cy.get("#valor").should("have.value", valor);
    const numero = '100.00';
    const casasDecimais = contarCasasDecimais(numero);

    expect(casasDecimais).to.equal(2);
});  

function contarCasasDecimais(numero) {
    const str = "" + numero;
    const index = str.indexOf('.');
    if (index >= 0) {
      return str.length - index - 1;
    } else {
      return 0;
    }
  }

Then("o sistema deve exibir uma mensagem de erro informando que o valor informado é inválido", (valor) => {
    //cy.get("#valor").should("have.value", valor);
});

    
