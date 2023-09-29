document.getElementById("inicio_sesion").addEventListener("submit", function (event) {
    event.preventDefault();
    inicio_sesion();
})

document.getElementById("registrarse").addEventListener("submit", function (event) {
    event.preventDefault();
    registrarse();
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
    const contrasena1 = document.getElementById("reg_contrasena").value;
    const contrasena2 = document.getElementById("reg_contrasena2").value;
    console.log(contrasena1,contrasena2)
    if (contrasena1 !== contrasena2) {
        // Las contraseñas no coinciden, muestra un mensaje de error
        document.getElementById("reg_mensaje").innerHTML = "Las contraseñas no coinciden.";
    } else {
        // Las contraseñas coinciden, procede con el registro
        const data = {
            alias: document.getElementById("reg_alias").value,
            correo: document.getElementById("reg_correo").value,
            nombre: document.getElementById("reg_nombre").value,
            apellido: document.getElementById("reg_apellido").value,
            password: contrasena1,
        };

        fetch("http://127.0.0.1:5000/usuarios/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        .then(Response => {
            if (Response.status === 201) {
                // Registro exitoso
                //MODAL EXITO
                Swal.fire({
                    icon: 'success',
                    title: '<span style="color: #145959; text-align: center;">Ya formas parte de MootMate</span>',
                    html: '<span style="color: #145959; text-align: center; width: 100%;">Ya puedes iniciar sesión</span>',
                    background: '#fff',
                }).then(() => {
                    window.location.href = "login.html";
                });

                // MODAL DE ERROR
                /*Swal.fire({
                    icon: 'error',
                    title: '<span style="color: #145959; text-align: center;">Ya formas parte de MootMate</span>',
                    html: '<span style="color: #145959; text-align: center; width: 100%;">Ya puedes iniciar sesión</span>',
                    background: '#fff',
                }).then(() => {
                    window.location.href = "login.html";
                });*/

                /*alert('Usuario creado exitosamente');*/
                /*window.location.href = "login.html";*/
            } else {
                // Error en el registro
                return Response.json().then(data => {
                    if (data.error && data.error.description) {
                        document.getElementById("reg_mensaje").innerHTML = data.error.description;
                    } else {
                        document.getElementById("reg_mensaje").innerHTML = "Error desconocido.";
                    }
                });
            }
        })
        .catch(error => {
            document.getElementById("reg_mensaje").innerHTML = "Ha ocurrido un error.";
        });
    }
}
