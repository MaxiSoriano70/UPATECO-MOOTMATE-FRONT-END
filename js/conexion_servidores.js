
window.addEventListener('load', async function () {
    data_profile = await getProfile();
    servidores_usuario = await getServidoresUsuario();
    await getServidores();
});

let id_usuario;
let lista_id_servidores_usuario = [];

async function getProfile(){
    const url = "http://127.0.0.1:5000/profile";
    const aliasname = document.getElementById("alias");
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();
        //modificar el alias del usuario
        aliasname.textContent = data.alias;
        //guardar el id_usuario
        id_usuario = data.id_usuario;

        return data;
    } catch (error){
        alert("error");
        return null;
    }
}

async function getServidores(){
    const url = 'http://127.0.0.1:5000/servidores/';
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        data.servidores.forEach( element => {
            cargar_tarjetas_servidores(id_usuario, element.nombre, element.imagen, element.descripcion, element.id_servidor);
        });

        return data.servidores;
    } catch (error) {
        return null;
    }
}

async function getServidoresUsuario() {
    const url = `http://127.0.0.1:5000/usuarios/${id_usuario}/servidores/`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        data.servidores.forEach( element => {
            lista_id_servidores_usuario.push(element.id_servidor);
        });

        return data.servidores;
    } catch (error) {
        return null;
    }
}

function cargar_tarjetas_servidores(id_usuario, nombre, imagen, descripcion, id_servidor){
    const sectionCards = document.getElementById("listaservidores");
    card = generarCard(
                        nombre = nombre,
                        imagenSrc = "/img/maxi-soriano.jpg",
                        descripcion = descripcion,
                        id_servidor = id_servidor);

    sectionCards.appendChild(card);
}

function generarCard(nombre, imagenSrc, descripcion, id_servidor) {
    enlaceContenedor = document.createElement('a');
    enlaceContenedor.href = `canales.html?${id_servidor}`;
    enlaceContenedor.id = id_servidor;
    
    const article = document.createElement('article');
    article.classList.add('card-desarrolador');

    const head = document.createElement('div');
    head.classList.add('head');

    const circulo = document.createElement('div');
    circulo.classList.add('circulo');
    head.appendChild(circulo);

    const contenedorImg = document.createElement('div');
    contenedorImg.classList.add('contenedor-img');

    const imagen = document.createElement('img');
    imagen.src = imagenSrc;
    imagen.alt = 'servidor';

    contenedorImg.appendChild(imagen);
    head.appendChild(contenedorImg);

    const descripcionDiv = document.createElement('div');
    descripcionDiv.classList.add('descripcion');

    const h3 = document.createElement('h3');
    h3.textContent = nombre;

    const p = document.createElement('p');
    p.textContent = descripcion;

    descripcionDiv.appendChild(h3);
    descripcionDiv.appendChild(p);

    enlaceContenedor.appendChild(head);
    enlaceContenedor.appendChild(descripcionDiv);

    const redes = document.createElement('div');
    redes.classList.add('redes');

    const boton = document.createElement('p');

    if (lista_id_servidores_usuario.includes(id_servidor)){
        boton.classList.add('btn-ya-eres-parte', 'boton');
        boton.textContent = 'Ya eres parte';
    } else {
        boton.classList.add('btn-formar-parte', 'boton');
        boton.textContent = 'Formar parte';
    }
    const i = document.createElement('i');
    i.classList.add('las', 'la-ban');
    boton.appendChild(i);

    redes.appendChild(boton);
    agregar_funcionalidad_boton(boton, nombre, id_servidor);

    article.appendChild(enlaceContenedor);
    article.appendChild(redes);
    
    return article;
}

function agregar_funcionalidad_boton(boton, nombre, id_servidor){
    boton.addEventListener('click', function(){
            if (boton.textContent === 'Ya eres parte') {
                Swal.fire({
                    title: 'Seguro que quiere salir del servidor?',
                    text: "Te van a extrañar",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, salir'
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        salir_servidor(id_servidor);
                        Swal.fire(
                            'SALISTE',
                            `Ya no eres parte de ${nombre}`,
                            'success'
                            );
                        boton.textContent = 'Formar parte';
                        boton.classList.remove('btn-ya-eres-parte');
                        boton.classList.add('btn-formar-parte');
                    }
                });
            }else {
                unirse_servidor(id_servidor);
                Swal.fire({
                    position: 'centro',
                    icon: 'success',
                    title: `Te uniste a ${nombre}`,
                    showConfirmButton: false,
                    timer: 1500
                })

                boton.textContent = 'Ya eres parte';
                boton.classList.remove('btn-formar-parte');
                boton.classList.add('btn-ya-eres-parte');
            }
    });
}

function salir_servidor(id_servidor){
    const url = `http://127.0.0.1:5000/servidores/${id_servidor}/usuarios/${id_usuario}`;
    fetch(url, {
        method: 'DELETE',
        credentials: 'include',
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                console.log("se salio del servidor");
            });
        } else {
            return response.json().then(data => {
                // Maneja errores o mensajes del servidor (si es necesario)
                console.log("Error al guardar cambios: " + data.description);
            });
        }
    })
    .catch(error => {
        console.error("Error en la solicitud: " + error);
    });
}

function unirse_servidor(id_servidor){
    const url = `http://127.0.0.1:5000/usuarios/${id_usuario}/servidores/${id_servidor}`;
    fetch(url, {
        method: 'PUT',
        credentials: 'include',
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                console.log("se unio a un servidor");
            });
        } else {
            return response.json().then(data => {
                // Maneja errores o mensajes del servidor (si es necesario)
                console.log("Error al guardar cambios: " + data.description);
            });
        }
    })
    .catch(error => {
        console.error("Error en la solicitud: " + error);
    });
}