window.addEventListener('load', function () {
    getProfile();
});

let id_usuario; 

const aliasElement = document.getElementById('alias');
const alias_hElement = document.getElementById('alias_h');
const nombreCompletoElement = document.getElementById('nombreCompleto')
const correoElement = document.getElementById('correo')
const editarNombreElement = document.getElementById('editar_nombre');
const editarApellidoElement = document.getElementById('editar_apellido');
const editarCorreoElement = document.getElementById('editar_correo');
const formulario = document.getElementById('perfil-form');

function getProfile() {
    const url = "http://127.0.0.1:5000/profile";
    
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                aliasElement.textContent = data.alias;
                alias_hElement.textContent = data.alias;
                nombreCompletoElement.textContent =  data.nombre + " " + data.apellido;
                correoElement.textContent = data.correo;
                editarNombreElement.value = data.nombre;
                editarApellidoElement.value = data.apellido;
                editarCorreoElement.value = data.correo;
                id_usuario = data.id_usuario;
            });
        } else {
            return response.json().then(data => {
                document.getElementById("message").innerHTML = data.message;
            });
        }
    })
    .catch(error => {
        document.getElementById("message").innerHTML = "An error occurred.";
    });
}



// Agrega un event listener para el evento submit del formulario
document.getElementById("perfil-form").addEventListener("submit", function (event) {
    // Evita que el formulario se envíe de forma predeterminada
    event.preventDefault();

    // Obtén los valores ingresados por el usuario
    
    const nuevoNombre = editarNombreElement.value;
    const nuevoApellido = editarApellidoElement.value;
    const nuevoCorreo = editarCorreoElement.value;
    const nuevaContrasena = document.getElementById("editar_contrasena").value;
    const nuevaContrasena2 = document.getElementById("editar_contrasena2").value;
    const imagenPerfilElement = document.getElementById('imagen');
    const picturePerfilElement = document.getElementById('picture_perfil');
    let   imagenPerfilActual;
    // Crea un objeto con los datos del formulario
    const formData = {
        alias: aliasElement.textContent,
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        correo: nuevoCorreo
    };

    // Verifica si los campos de contraseña se han modificado y son iguales
    if (nuevaContrasena.trim() !== "" && nuevaContrasena === nuevaContrasena2) {
        formData.password = nuevaContrasena;
    } else if (nuevaContrasena.trim() !== "" || nuevaContrasena2.trim() !== "") {
        // Si las contraseñas no son iguales o están vacías, muestra un mensaje de error
        alert( "Las contraseñas no coinciden.");
        return;
    }
    
    const selectedFile = imagenPerfilElement.files[0];
    if (selectedFile){
        
       picturePerfilElement.src = URL.createObjectURL(selectedFile);

       const formDataImg = new FormData();
       formDataImg.append('imagen', selectedFile);
       formDataImg.append('id_usuario',id_usuario);
       const url2 = "http://127.0.0.1:5000/usuarios/foto/";
        fetch(url2, {
            method: 'PUT',
            credentials: 'include',
            body: formDataImg, 
        })
        .then(data => {
            console.log(data.mensage)
        })
        .catch(error => {
            console.error('Error:', error);
        
        });
    }
    // Realiza una solicitud PUT al servidor para guardar los cambios
    
    const url = "http://127.0.0.1:5000/usuarios/";
    fetch(url, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Convierte el objeto a JSON
    })
    
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                // Maneja la respuesta exitosa del servidor (si es necesario)
                alert("Cambios guardados con éxito");
                //document.getElementById("btn-guardar").checked = false;
                //aliasElement.textContent = formData.alias;
                //nombreCompletoElement.textContent = formData.nombre + " " + formData.apellido;
                //correoElement.textContent = formData.correo;
                location.reload();
            });
        } else {
            return response.json().then(data => {
                // Maneja errores o mensajes del servidor (si es necesario)
                alert("Error al guardar cambios: " + data.description);
            });
        }
    })
    .catch(error => {
        // Maneja errores de red u otros errores
        console.error("Error en la solicitud: " + error);
    });
});

document.getElementById("logout").addEventListener("click", logout);

function logout() {
    const url = "http://127.0.0.1:5000/auth/logout";
    
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                window.location.href = "login.html";
            });
        } else {
            return response.json().then(data => {
                document.getElementById("message").innerHTML = data.message;
            });
        }
    })
    .catch(error => {
        document.getElementById("message").innerHTML = "An error occurred.";
    });
}

// Event listener para cerrar el modal al hacer clic en "Cancelar"
document.getElementById("btn-cancelar").addEventListener("click", function () {
    location.reload();
});