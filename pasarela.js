let product = 'Bicicleta'
let price = 200;

pasarelaPago(product, price);



function pasarelaPago(product, price) {

    alert(`Estas por comprar ${product} a $${price}`);

    const name = prompt('Ingrese su nombre por favor...');
    validarNombre(name);

    const dni = prompt('Ingrese su DNI por favor...');
    validarDNI(dni);


    const numeroTarjeta = prompt('Ingrese su numero de Tarjeta por favor...');
    validarNumeroTarjeta(numeroTarjeta);

    
    const numeroCVV = prompt('Ingrese el numero de CVV...');
    validarNumeroCVV(numeroCVV);

    
    const numeroMesVencimiento = prompt('Ingrese el mes de Vencimiento de su Trajeta: ');
    validarMesVencimiento(numeroMesVencimiento);
    const numeroAnioVencimiento = prompt('Ingrese el año de vencimiento de su Tarjeta: ');
    validarAnioVencimiento(numeroAnioVencimiento);
     
    compararDatos();
    
    return alert('Compra Satisfactoria');


    function validarNombre(name) {
        if(!isNaN(name)) {
            return validarNombre(prompt('Por favor ingrese un nombre valido: '));
        } else {
            return name;
        }
    }



    function validarDNI(dni) {
    
        if(dni.length !== 8) {
            return validarDNI(prompt('Ingrese un DNI valido: '));
        } else {
         return dni;
        }
    }


    function validarNumeroTarjeta(numeroTarjeta) {
        
        if (numeroTarjeta.length !== 16) {
            return validarNumeroTarjeta(prompt('Ingrese un numero de Tarjeta valido: '));
        } else {
            return numeroTarjeta;
        }
    }

    function validarMesVencimiento(numeroMesVencimiento) {
        if(numeroMesVencimiento > 12 || numeroMesVencimiento < 01) {
            return validarMesVencimiento(prompt('Ingrese un numero de Mes valido: '));
        } else {
            return numeroMesVencimiento;
        }
    }

    function validarAnioVencimiento(numeroAnioVencimiento) {
        if(numeroAnioVencimiento > 2050 || numeroAnioVencimiento < 2020) {
            return validarAnioVencimiento(prompt('Ingrese un numero de Año valido: '));
        } else {
            return numeroAnioVencimiento;
        }
    }


    function validarNumeroCVV(numeroCVV) {
        if(numeroCVV.length !== 3) {
            return validarNumeroCVV(prompt('Ingrese numero CVV valido: '));
        } else {
            return numeroCVV;
        }
    }


    function guardarDatos(consultaUsuario) {
        if(consultaUsuario === 'si'){
        
        let userDataName = name;
        let userDataDNI = dni;
        let userDataCardNumber = numeroTarjeta;

        localStorage.setItem('userDataName', userDataName);
        localStorage.setItem('userDataDNI', userDataDNI);
        localStorage.setItem('userDataCard', userDataCardNumber);

        } else if(consultaUsuario === 'no') {
            return localStorage.clear();
        }
    }

    function modificarDatos(consultaUsuarioModificacion) {
        if (consultaUsuarioModificacion === 'si') {
            localStorage.clear();
            window.location.reload();
        }
    }

    function compararDatos() {
        const consultaUsuario = prompt('Desea guardar sus datos personales para una proxima compra?\n Responda: SI/NO').toLowerCase();
        if(consultaUsuario === 'si') {
            guardarDatos(consultaUsuario);
        } else if(localStorage.getItem('userDataDNI')!==null) {
            const consultaUsuarioModificacion = prompt('Sus datos se encontraban guardados, desea modificarlos?\n Responda: SI/NO').toLowerCase();
            modificarDatos(consultaUsuarioModificacion);
        }
    }

}











