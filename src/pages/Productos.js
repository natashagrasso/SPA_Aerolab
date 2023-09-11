import getHash from '../utils/getHash';
import getData from '../utils/getData';
import Error404 from './Error404';


const Productos = async () => {

    const id = getHash(); //Obtenemos el ID de producto que seleccionamos mediante su id que el hash
    const productos = await getData(); //Obtenemos todos los productos 

    const ProductoEncontrado = productos.filter( producto => producto._id === id) //Buscamos el producto seleccionado
    
    const products = ProductoEncontrado[0]

    
    console.log(products)

    const view =`

         <div class = "Products-inner">
            <article class = "Products-card">
                <img src="${products.img.url}" alt="${products.name}">  
                <h2>${products.name}</h2>
            </article>

            <article class = "Products-card">
            <h3> Name: <span>${products.name}</span></</h3>
            <h3> Cost: <span>${products.cost}</span></</h3>
            <h3> Category: <span>${products.category}</span></h3>
            
            </article>
        </div>  
        `
        ;Error404()
        
    return view;
}     

export default Productos;