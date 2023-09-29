
window.addEventListener('load', async function () {
    dataProfile = await getProfile();
    servidores = await getServidores();
});
let  id_usuario;
const a = document.createElement('a');

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

        servidores = data.servidores;
    
        data.servidores.forEach(element => {
            cargar_tarjetas_servidores(id_usuario, element.nombre, element.imagen, element.descripcion, element.id_servidor);
        });

        return data.servidores;
    } catch (error) {
        return null;
    }
}

async function getServidoresUsuario(id_servidor, id_usuario){
    const url = `http://127.0.0.1:5000/servidores/${id_servidor}/${id_usuario}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        return data.servidores;
    } catch (error) {
        return null;
    }
}

function cargar_tarjetas_servidores(id_usuario, nombre, imagen, descripcion, id_servidor){
    const sectionCards = document.getElementById("listaservidores");
    article = generarCard(
                        nombre = nombre,
                        imagenSrc = "/img/maxi-soriano.jpg",
                        descripcion = descripcion,
                        link = `canales.html?${id_servidor}`,
                        id_usuario = id_usuario,
                        id_servidor = id_servidor);

    sectionCards.appendChild(article);
}

function generarCard(nombre, imagenSrc, descripcion, link, id_usuario, id_servidor) {
    
    const article = document.createElement('article');
    article.classList.add('card-desarrolador');
    article.id = id_servidor;

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

    const redes = document.createElement('div');
    redes.classList.add('redes');
    /*
    fetch(`http://127.0.0.1:5000/servidores/${id_servidor}/${id_usuario}`)
        .then(response => response.json())
        .then(data => {
            if (data.mensaje = true){
                const a = document.createElement('a');
                a.classList.add('btn-ya-eres-parte');
                a.href = link;
                a.textContent = 'Ya eres parte';
            } else {
                const a = document.createElement('a');
                a.classList.add('btn-formar-parte');
                a.href = link;
                a.textContent = 'Formar parte';
            }
        })
        .catch(error => console.error('Error al cargar servidores:', error));
    
    const i = document.createElement('i');
    i.classList.add('las', 'la-ban');
    a.appendChild(i);

    redes.appendChild(a);
    */

    article.appendChild(head);
    article.appendChild(descripcionDiv);
    article.appendChild(redes);
    
    return article;
}
