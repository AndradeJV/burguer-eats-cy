import signUp from '../../pages/SignUpPage';

describe('Cadastro', () => {
    it('Seja um entregador', () => {
        
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


        signUp.go();
        signUp.fillForm(entregador);
        signUp.submit();
        signUp.modalContentShouldBe(expectMessage)
        
    });
});