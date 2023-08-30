//obtenemos una ruta para manejar los templates de las pages

const resolveRoutes = (route) => {
    //usamos un ternario
    //verifica si la longitud de la ruta <=3 con esto se identifica las rutas más básicas, como la pag de inicio o las rutas que contienen un ID especif
   //si la ruta es igual a '/' (pag de inicio), entonces valideRoute se establece como '/' (la misma ruta). sino se establece como '/:id', es decor que se espera un ID en la ruta
    if (route.length <= 24) 
    { 
        let valideRoute = route === '/' ? route : '/:id'; //validamos las rutas
        return valideRoute; // Se devuelve la ruta generada anteriormente

    }
    //si route.length >3 devuelve la ruta original que se recibio como param
    return `/${route}`;
};

export default resolveRoutes;