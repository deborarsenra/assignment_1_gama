class CadastroController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputEmail = $('#email');
        this._inputEmpresa = $('#empresa');
        this._listaCadastros = new ListaCadastros();

        this._cadastrosView = new CadastrosView($('#cadastrosView'));
        this._cadastrosView.update(this._listaCadastros);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event) {

        event.preventDefault();
        this._listaCadastros.adiciona(this._criaCadastro());
        this._cdastrosView.update(this._listacadastros);

        this._mensagem.texto = 'Cadastro realizado com sucesso!';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    _criaCadastro() {

        return new Cadastro(
            this._inputNome.value),
            this._inputEmail.value,
            this._inputEmpresa.value);
    }

    _limpaFormulario() {

        this._inputNome.value = '';
        this._inputEmail.value = '';
        this._inputEmpresa.value = '';
    }
}
