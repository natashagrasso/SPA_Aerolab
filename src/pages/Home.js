import getData from '../utils/getData.js';

const Home = async () => {

    const products = await getData()
    console.log('producto', products)

    const view = `
       <div class = "Product">
        ${products.map (product => `
            <article class = "Product-items">
                <a href="#/${product._id}/">
                    <img src="${product.img.url}" alt= "${product.name}">
                    <h2>${product.name}</h2>
                </a>
            </article>  
            `).join('')}    
            
       </div>
    `;
    
    return view;
}

export default Home; 

