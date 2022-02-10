import signUp from '../../pages/SignUpPage';

describe('Cadastro', () => {
    beforeEach(function(){
        cy.fixture('/cadastro/entregador').then((entregador) => {
            this.entrega = entregador;
        });
    });

    it('Seja um entregador', function(){
        const expectMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."


        signUp.go();
        signUp.fillForm(this.entrega.signUp);
        signUp.submit();
        signUp.modalContentShouldBe(expectMessage)
    });
});