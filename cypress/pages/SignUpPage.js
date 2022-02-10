class SignUpPage {
    go(){
        cy.visit('/');
        cy.get('a[href="/deliver"]').click();
        cy.get('form > h1').should('have.text', 'Cadastre-se para  fazer entregas');
    }

    fillForm(entregador){
        cy.get('input[placeholder="Nome completo"]').type(entregador.nome);
        cy.get('input[name="cpf"]').type(entregador.cpf);
        cy.get('input[placeholder="E-mail"]').type(entregador.email);
        cy.get('input[placeholder="Whatsapp"]').type(entregador.whatsApp);

        cy.get('input[placeholder="CEP"]').type(entregador.endereco.cep);
        cy.get('input[value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type(entregador.endereco.numero);
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento);

        // Validação de campos
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua);
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro);
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidadeUf);

        cy.contains('.delivery-method li', entregador.metodoEntrega).click();
        cy.get('input[accept*="image"][type=file]').attachFile(entregador.cnh);
    }

    submit(){
        cy.get('form button[type=submit]').click();
    }

    modalContentShouldBe(expectMessage){
        cy.get('div[class="swal2-html-container"]').should('have.text', expectMessage);
    }
}

export default new SignUpPage;