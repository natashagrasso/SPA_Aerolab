import router from './src/routes/index';

//escuchador de eventos
//El load se dispara cuando todos los recursos (imag,srcips,etc) se cargaron por completo
//el router  maneja la carga inicial de la pag, carga componentes, datos iniciales etc
window.addEventListener('load', router); 

//escucha el evento hashchange:calcula un hash único para identificar ese producto especifico
// el router va a tomar el fragmento de la URL actual y va a hacer las acciones corresp (mostrar el contenido o cargarcomponentes)
window.addEventListener('hashchange', router);
