describe('Cadastro', () => {
    it('Seja um entregador', () => {
        cy.viewport(1440, 900);
        cy.visit('https://buger-eats.vercel.app');
        cy.get('a[href="/deliver"]').click();
        cy.get('form > h1').should('have.text', 'Cadastre-se para  fazer entregas');

        var entregador = {
            nome: 'João Andrade',
            cpf: '00000000012',
            email: 'joaoteste@teste.com',
            whatsApp: '11 91111-1111',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: 1000,
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidadeUf: 'São Paulo/SP',
            },
            metodoEntrega: 'Moto',
            cnh: '/cadastro/assets/cnh-digital.jpg'
        }

        const expectMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."

        // Preenchimento de campos
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

        cy.get('form button[type=submit]').click();

        cy.get('div[class="swal2-html-container"]').should('have.text', expectMessage);
    });
});