Feature: Validar Casas Decimais

Scenario: Validar Casas Decimais
Given que o usuário esteja na tela de cadastro de produtos
When o usuário preencher o campo de preço com um valor com mais de duas casas decimais
Then o sistema deverá verificar a quantidade de casas decimais informadas
Then o sistema deve exibir uma mensagem de erro informando que o valor informado é inválido





