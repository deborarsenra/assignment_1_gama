var campos = [
    document.querySelector('#nome'),
    document.querySelector('#email'),
    document.querySelector('#empresa')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();


    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';

});
