const URL = "https://coding-challenge-api.aerolab.co/products";

const getData = async () => {
  try { 
    const response = await fetch(URL, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIzN2E5ODIxOGI4NTAwMjE4OWMzNDEiLCJpYXQiOjE2NjMyNjk1Mjh9.jcDSJZCbiBzx6pdlMZDV5ZBPGgCD5ZTRBvWxDSmM3GM",
      }, 
    })
    const data = await response.json();
    console.log(data)
    return data;
    
  } catch(error) {
    console.log("Fetch error ", error)
  }
}
  

export default getData;




/* const URL = 'https://coding-challenge-api.aerolab.co/products';


const API = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDcyZTJhMDViODE4ODAwMTk1ZTgxMmEiLCJpYXQiOjE2ODUyNTA3MjB9.nRlNqnbmauv5Wk4BiMUbqUR1nqaSTDGJX-YALtHO7JU';


const getData = async (id) => {
    //hacemos un ternario,donde si viene un id,que venga toda la api con ese id que necesitamos del producto
    //por interpoblacion tomamos un la API y un ID
    const apiURL = id ? `${API} ${id}`: URL;
    //console.log(apiURL)

    try {
        const response = await fetch(apiURL, {
            headers: {
                Authorization: API
                //Authorization: `Bearer ${API}`
            }
        });

        const data = response.json();
        console.log(data)
        return data;
    } catch(error){
        console.log('Fetch Error', error)
    };
};

export default getData; */