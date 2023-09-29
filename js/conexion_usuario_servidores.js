//Funcion que crea card-servidores
function generarCardDesarrollador(nombre, imagenSrc, descripcion, link, id) {
    const article = document.createElement('article');
    article.classList.add('card-desarrolador');
    article.id = id;

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

    const a = document.createElement('a');
    a.classList.add('btn-formar-parte');
    a.href = link;
    a.textContent = 'ir al servidor';

    const i = document.createElement('i');
    i.classList.add('las', 'la-ban');
    a.appendChild(i);

    redes.appendChild(a);

    article.appendChild(head);
    article.appendChild(descripcionDiv);
    article.appendChild(redes);

    return article;
}

function cargarServidores(alias) {
    fetch(`http://127.0.0.1:5000/usuarios/${alias}/servidores/`)
        .then(response => response.json())
        .then(data => {
            // Acceder a la lista de servidores
            const servidores = data.servidores;

            // Iterar sobre los servidores y crear elementos para cada uno
            servidores.forEach(servidor => {
                const divServidor = document.createElement('div');
                const h3Nombre = document.createElement('h3');
                const pDescripcion = document.createElement('p');

                article = generarCardDesarrollador(
                    nombre = servidor.nombre,
                    imagenSrc = servidor.imagen,
                    descripcion = servidor.descripcion,
                    id = servidor.id_servidor
                )

                const sectionCards = document.querySelector('.card-desarrolladores');
                sectionCards.appendChild(article)

            });
        })
        .catch(error => console.error('Error al cargar servidores:', error));
}

// Llamar a la función para cargar los servidores al cargar la página
window.onload = () => cargarServidores('id_usuario'); // Reemplaza 'id_usuario' con el ID que deseas cargar.

