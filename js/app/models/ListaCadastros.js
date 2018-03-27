class ListaCadastros {

    constructor() {

        this._cadastros = [];
    }

    adiciona(cadastro) {

        this._cadastros.push(cadastro);
    }

    get cadastros() {

        return [].concat(this._cadastros);
    }
}
