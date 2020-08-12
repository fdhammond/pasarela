function pasarelaPago(producto, precio) {
    let dni = 0;
    let nombre = '';
    let numeroTarjeta = 0;
    let vencimiento = '';
    let cvv = 0;
    let editar = false;
    alert('Esta por comprar ' + producto + 'a $' + precio);

    if (localStorage.getItem('dni')) editar = confirm('Desea sobrescribir los datos almacenados?');

    do {
        if (editar) {
            dni = prompt('Ingrese DNI')

        } else {
            dni = localStorage.getItem('dni') || prompt('Ingrese DNI');
        }
    } while (!validarDNI(dni));

    nombre = localStorage.getItem('nombre') || prompt('Ingrese nombre');

    do {
        if (editar) {
            numeroTarjeta = prompt('Ingrese numeroTarjeta');
        } else {
            numeroTarjeta = localStorage.getItem('numeroTarjeta') || prompt('ingrese numero de tarjeta')
        }
    } while (!validarNumeroTarjeta(numeroTarjeta));

    do {
        if (editar) {
            vencimiento = prompt('Ingrese el Vencimiento de su tarjeta');
        } else {
            vencimiento = localStorage.getItem('vencimiento') || prompt('Ingrese vencimiento');
        }
    } while (!validarVencimiento(vencimiento));

    do {
        if (editar) {
            cvv = prompt('Ingrese cvv');
        } else {
            cvv = localStorage.getItem('cvv') || prompt('Ingrese cvv');
        }
    } while (!validarCvv(cvv));

    if (confirm('Desea que guardemos sus datos para la siguiente transaccion?')) {
        localStorage.setItem('dni', dni);
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('numeroTarjeta', numeroTarjeta);
        localStorage.setItem('vencimiento', vencimiento);
        localStorage.setItem('cvv', cvv);
    } else {
        localStorage.removeItem('dni');
        localStorage.removeItem('nombre');
        localStorage.removeItem('numeroTarjeta');
        localStorage.removeItem('vencimiento');
        localStorage.removeItem('cvv');
    }

    return 'El pago fue exitoso!'
}

function validarDNI(dni) {
    return dni && dni.length === 8;
}

function validarNumeroTarjeta(numeroTarjeta) {
    return numeroTarjeta && numeroTarjeta.length === 16;
}

function validarVencimiento(vencimiento) {
    return vencimiento && vencimiento.length === 5 && vencimiento.indexOf("/") !== -1;
}

function validarCvv(cvv) {
    return cvv && cvv.length === 3;
}

pasarelaPago('Bicicleta', 200);
