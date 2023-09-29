window.addEventListener('load', function () {
    getProfile();
});

let id_usuario;

document.getElementById("logout").addEventListener("click", logout);

const bienvenidaElement = document.getElementById('bienvenida');
const aliasElement = document.getElementById('alias');



function getProfile() {
    const url = "http://127.0.0.1:5000/profile";
    
    fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json().then(data => {
                
                id_usuario = data.id_usuario;
                aliasElement.textContent = data.alias;
                const nombreCompleto = data.nombre+" "+data.apellido;
                bienvenidaElement.textContent = "¡¡¡Bienvenid@ " + nombreCompleto +"!!!";
                var datosUsuario = data;
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

