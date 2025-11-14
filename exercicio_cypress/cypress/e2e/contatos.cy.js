describe('Agenda - CRUD de contatos', () => {
  const baseUrl = 'https://ebac-agenda-contatos-tan.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('inclui um novo contato', () => {
    // abrir formulário — tenta por texto 'Novo', 'Adicionar' ou botão de '+'
    cy.contains(/novo contato|adicionar contato|criar contato|\+|add contact/i).click({ force: true });

    // preencher campos: o seletor usa vários nomes possíveis, ajusta se necessário
    cy.get('input[name="nome"], input[name="name"], input[id="name"], input[placeholder*="Nome"]').type('Teste Nome');
    cy.get('input[name="email"], input[id="email"], input[placeholder*="email"]').type('teste+ci@exemplo.com');
    cy.get('input[name="telefone"], input[name="phone"], input[id="phone"], input[placeholder*="telefone"]').type('11999999999');

    // submeter
    cy.get('button[type="submit"], button:contains("Salvar"), button:contains("Adicionar")').click({ force: true });

    // asserções
    cy.contains('Teste Nome').should('exist');
    cy.contains('teste+ci@exemplo.com').should('exist');
  });

  it('altera um contato existente', () => {
    // encontra o contato e clica em editar — ajusta se o botão de editar for ícone
    cy.contains('Teste Nome').parent().within(() => {
      cy.contains(/editar|alterar|edit/i).click({ force: true });
    });

    // altera nome e salva
    cy.get('input[name="nome"], input[name="name"], input[id="name"]').clear().type('Teste Nome Alterado');
    cy.get('button[type="submit"], button:contains("Salvar")').click({ force: true });

    cy.contains('Teste Nome Alterado').should('exist');
  });

  it('remove um contato', () => {
    // encontra o contato alterado e clica em remover/excluir
    cy.contains('Teste Nome Alterado').parent().within(() => {
      cy.contains(/remover|excluir|delete/i).click({ force: true });
    });

    // se a app pedir confirmação, confirmar (descomente se precisar)
    // cy.on('window:confirm', () => true);

    cy.contains('Teste Nome Alterado').should('not.exist');
  });
});
