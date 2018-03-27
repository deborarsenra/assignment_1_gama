class CadastrosView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>EMPRESA</th>
                </tr>
            </thead>

            <tbody>
                ${model.cadastros.map(n =>
                    `
                        <tr>
                            <td>${n.nome}</td>
                            <td>${n.email}</td>
                            <td>${n.empresa}</td>
                        </t>
                    `
                    ).join('')}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
            </tfoot>
        </table>
        `;
    }

}
