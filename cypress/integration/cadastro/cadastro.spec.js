import signUp from '../../pages/SignUpPage';

describe('Cadastro', () => {
    beforeEach(function(){
        cy.fixture('/cadastro/entregador').then((entregador) => {
            this.entrega = entregador;
        });
    });

    it('Seja um entregador', function(){
        signUp.go();
        signUp.fillForm(this.entrega.signUp);
        signUp.submit();
        signUp.modalContentShouldBe(this.entrega.signUp);
    });
});