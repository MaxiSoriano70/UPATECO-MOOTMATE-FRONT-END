window.addEventListener('load', async function () {
    await getProfile();
    servidores_usuario = await getServidoresUsuario();
});

const cartel = document.getElementById("vacio");

async function getServidoresUsuario() {
    const url = `http://127.0.0.1:5000/usuarios/${id_usuario}/servidores/`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();

        data.servidores.forEach( element => {
            alert("si pase jeje");
        });
        if (data.servidores.length() === 0){
            cartel.style.display = 'flex';
        }

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