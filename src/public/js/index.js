const socket = io();

//socket.emit('message', nuevo);

socket.on('listadoP', (listado) =>{
    const listadoDiv = document.getElementById('mensajes');

    listadoDiv.innerHTML = "";
    if(listado && listado.lenght > 0) {
        listado.forEach((listadoObj) => {
            pElement = document.createElement('p');
            listadoDiv.textContent = `Title: {title}
                                      description: {description},
                                      price: {description},
                                      thumbnail: {description},
                                      code: {description},
                                      stock: {description},
                                      status: {description},
                                      category: {description},
                                      id: {description}`
                                                            
            listadoDiv.appendChild(pElement);
                
        });
    } 

})


socket.on('listadoAct', (listado) =>{
    const listadoDiv = document.getElementById('mensajes');

    listadoDiv.innerHTML = "";
    if(listado && listado.lenght > 0) {
        listado.forEach((listadoObj) => {
            pElement = document.createElement('p');
            listadoDiv.textContent = `Title: {title}
                                      description: {description},
                                      price: {description},
                                      thumbnail: {description},
                                      code: {description},
                                      stock: {description},
                                      status: {description},
                                      category: {description},
                                      id: {description}`
                                                            
            listadoDiv.appendChild(pElement);
                
        });
    } 

})

