
//el hash es la identificacion que nos permite tomar el id de un producto para  
//tener una referncia del producto y todos sus datos 
const getHash = () => 
//con location.hash traemos un fragmento de la URL a partir de donde nos encontremos
//el slice(1) corta la URL y muestra a partir del primer elemento q encuentre
//toLocaleLowerCase() convierte toda la cadena a minuscula
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;