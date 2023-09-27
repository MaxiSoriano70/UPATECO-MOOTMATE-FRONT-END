document.getElementById("inicio_sesion").addEventListener("submit", function (event) {
    event.preventDefault();
    inicio_sesion();
})

document.getElementById("registrarse").addEventListener("submit", function (event) {
    event.preventDefault();
    registrarse();
})

document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault();
    logout();
})
function inicio_sesion(){
    const data = {
        alias: document.getElementById("alias").value,
        password: document.getElementById("contrasena").value,
    };
    
    fetch("http://127.0.0.1:5000/auth/login",{method:'POST',
    headers: {'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include'
    })
    .then(Response=>{
        if (Response.status===200){
            //redireccionar a la pagina del perfi si el login es correcto
            return Response.json().then(data => {
                window.location.href = "bienvenida.html";
            });
        }else{
            return Response.json().then(data => {
                document.getElementById("mensaje").innerHTML = data.message;
            });    
        }
    })
    .catch(error => {
        document.getElementById("mensaje").innerHTML ="A ocurrido un error"
    }

        )
}
function registrarse() {
    const data = {
        alias : document.getElementById("reg_alias").value,
        correo : document.getElementById("reg_correo").value,
        nombre : document.getElementById("reg_nombre").value,
        apellido : document.getElementById("reg_apellido").value,
        contrasena : document.getElementById("reg_contrasena1").value,
    };

    fetch("http://127.0.0.1:5000/register", {method:'POST',
    headers:{'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include'
    })
    .then(Response=>{
        if (Response.status===201){
            //redireccionar a la pagina del perfi si el login es correcto
            return Response.json().then(data => {
                alert('Usuario creado exitosamente');
                window.location.href = "login.html";
            });
        }else{
            return Response.json().then(data => {
                document.getElementById("reg_message").innerHTML = data.message;
            });    
        }
    })
    .catch(error => {
        document.getElementById("reg_message").innerHTML ="A ocurrido un error"
    }
    )
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