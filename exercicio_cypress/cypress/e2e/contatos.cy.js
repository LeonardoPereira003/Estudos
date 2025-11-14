describe('Agenda - CRUD de contatos (final)', () => {
  const baseUrl = 'https://ebac-agenda-contatos-tan.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // Helpers
  const fillTopForm = ({ nome, email, telefone }) => {
    cy.get('input[placeholder*="Nome"], input[placeholder*="nome"], input[name="nome"], input[name="name"]', { timeout: 6000 })
      .first().clear({ force: true }).type(nome, { force: true });
    cy.get('input[placeholder*="E-mail"], input[placeholder*="email"], input[type="email"], input[name="email"]', { timeout: 6000 })
      .first().clear({ force: true }).type(email, { force: true });
    cy.get('input[placeholder*="Telefone"], input[placeholder*="telefone"], input[type="tel"], input[name="telefone"], input[name="phone"]', { timeout: 6000 })
      .first().clear({ force: true }).type(telefone, { force: true });
  };

  const clickAdd = () => {
    cy.contains('button', /ADICIONAR|Adicionar|Adicionar contato|Add/i, { matchCase: false, timeout: 5000 })
      .first().click({ force: true });
  };

  const findAncestorWithButtons = ($el) => {
    // retorna o ancestor DOM node que contenha button(s) (procura até 6 níveis)
    let card = $el[0];
    for (let i = 0; i < 6 && card; i++) {
      if (card.querySelector && card.querySelector('button')) break;
      card = card.parentElement;
    }
    if (!card) card = $el[0].parentElement;
    return card;
  };

  it('inclui um novo contato', () => {
    const novo = { nome: 'Teste Nome', email: 'teste+ci@exemplo.com', telefone: '11999999999' };

    cy.log('Preencher o formulário no topo');
    fillTopForm(novo);

    cy.log('Clicar em ADICIONAR');
    clickAdd();

    cy.log('Validar inclusão');
    cy.contains(novo.nome, { timeout: 8000 }).should('exist');
    cy.contains(novo.email, { timeout: 8000 }).should('exist');
  });

  it('altera um contato existente', () => {
    const original = 'Teste Nome';
    const novoNome = 'Teste Nome Alterado';

    cy.log('Procurar contato e clicar em EDITAR dentro do mesmo card');
    cy.contains(original, { timeout: 8000 }).should('exist').then($el => {
      const card = findAncestorWithButtons($el);
      cy.wrap(card).find('button').then($btns => {
        const editBtn = Array.from($btns).find(b => /EDITAR|Editar|editar|EDIT/i.test(b.innerText));
        if (editBtn) {
          cy.wrap(editBtn).click({ force: true });
        } else {
          // tentar por title/aria-label ou ícone
          cy.wrap(card).find('[title*="editar"], [aria-label*="editar"], [data-test*="edit"]').first().click({ force: true });
        }
      });
    });

    cy.log('Alterar o campo Nome no formulário (topo ou modal)');
    cy.get('input[placeholder*="Nome"], input[name="nome"], input[name="name"], input[id="name"]', { timeout: 8000 })
      .first().clear({ force: true }).type(novoNome, { force: true });

    cy.log('Salvar alteração (vários textos possíveis)');
    cy.get('button', { timeout: 6000 }).then($btns => {
      const save = Array.from($btns).find(b => /salvar|atualizar|confirmar|save|ok|concluir|atualizar contato/i.test(b.innerText));
      if (save) cy.wrap(save).click({ force: true });
      else clickAdd();
    });

    cy.log('Validar alteração');
    cy.contains(novoNome, { timeout: 8000 }).should('exist');
  });

  it('remove um contato', () => {
    const nomeRemover = 'Teste Nome Alterado';

    cy.log('Procurar o contato para remover e clicar em DELETAR dentro do mesmo card');
    cy.contains(nomeRemover, { timeout: 8000 }).should('exist').then($el => {
      const card = findAncestorWithButtons($el);
      cy.wrap(card).find('button').then($btns => {
        const delBtn = Array.from($btns).find(b => /DELETAR|Deletar|Excluir|Remover|apagar|DELETE/i.test(b.innerText));
        if (delBtn) {
          cy.wrap(delBtn).click({ force: true });
        } else {
          cy.wrap(card).find('[title*="excluir"], [aria-label*="excluir"], [data-test*="delete"]').first().click({ force: true });
        }
      });
    });

    cy.log('Confirmar diálogo se necessário');
    cy.on('window:confirm', () => true);

    cy.log('Validar remoção');
    cy.contains(nomeRemover, { timeout: 8000 }).should('not.exist');
  });
});
