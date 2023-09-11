//En este archivo importamos todas las rutas

//componentes
import Header from '../templates/Header';
import Home from '../pages/Home';
import Error404 from '../pages/Error404'
import Productos from '../pages/Productos';
import Category from '../templates/Category';


//funciones
import getHash from '../utils/getHash';
import getData from '../utils/getData';
import resolveRoutes from '../utils/getResolveRoutes';


//Esto permite mapear(transformar rápidamente los datos en un arreglo)las rutas a los componentes o pag corresp

const routes = {
    '/': Home,
    '/:id':Productos,      //necesitamos el identificador de producto para mostrarnos el detalle
   /*  '/about': 'about' */
};


//creamos una funcion asincrona que maneja las diferentes rutas y renderizar los componentes 
const router = async () => {
//Se hace una llamada asincrónica a la función getData para obtener los datos necesarios para mostrar los productos
    const productos = await getData()
    const header = null ||  document.getElementById('header');  
    const productoDisp = null ||  document.getElementById('content');
    const categorias = null || document.getElementById('categorias');


    header.innerHTML= await Header();
    categorias.innerHTML = await Category();
   

    //instanciamos la funcion
    let hash = getHash();
    let route = await resolveRoutes(hash);
    //si no viene la pag, renderizamos      
    let render = routes[route] ? routes[route] : Error404;
    productoDisp.innerHTML = await render(productos);

};
//como es una ruta exportamos
export default router;