document.addEventListener('DOMContentLoaded', function() {
    const botonAgregar =  document.getElementById('agregar');
    const contenedor = document.getElementById('contenedor')
    const botonLimpiar = document.getElementById('limpiar');
    const item = document.getElementById('item');


    botonAgregar.addEventListener('click', function() {
        const valor = item.value;
        if (valor) {
            localStorage.setItem('elemento', valor);
            const objetoGuardado = document.createElement('p');
            objetoGuardado.textContent = valor;
            contenedor.appendChild(objetoGuardado)
        }});

        botonLimpiar.addEventListener('click', function() {
            localStorage.removeItem('elemento');
            contenedor.innerHTML = '';
        });
        
    
    })