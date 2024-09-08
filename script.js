const obtenerValorInput = () => {
    let inputTexto = document.getElementById("character-id");
    let valor = inputTexto.value; 
    peticionApi(valor);
}

const peticionApi = (personaje) => {
    const baseURL = 'https://rickandmortyapi.com/api/character/';
    const url = `${baseURL}${personaje}`;
 
    axios.get(url)
        .then(res => { printData(res.data);
        })            
        .catch(error => { console.log(error); 
        let respuesta= document.getElementById('show-info');
        respuesta.innerHTML = `<h3>Error: No se encuentra el personaje.
        Por favor, verifica el ID ingresado.</h3>` ;
        });
}

const printData = (data) => {
    let respuesta = document.getElementById('show-info');
    respuesta.innerHTML = ` 
    <img src="${data.image}" alt="${data.name}">
    <label>Name: <h3>${data.name}</h3></label>
    <label>Status: <h3>${data.status}</h3></label>
    <label>Species: <h3>${data.species}</h3></label>
    <label>Gender: <h3>${data.gender}</h3></label>
    <label>Origin: <h3>${data.origin.name || 'Desconocido'}</h3></label>
    <label>Location: <h3>${data.location.name || 'Desconocido'}</h3></label>
    <label>Type: <h3>${data.type || 'N/A'}</h3></label>
    <label>Created: <h3>${new Date(data.created).toLocaleDateString() || 'Desconocido'}</h3></label>
    `
}
   