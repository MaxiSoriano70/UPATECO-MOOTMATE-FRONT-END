document.getElementById("form-crear-servidor").addEventListener("submit", function (event) {
    event.preventDefault();
    crear_servidor();
})

function crear_servidor() {
        
    const data = {
           
        nombre: document.getElementById("regSer_nombre").value,
        descripcion: document.getElementById("regSer_descripcion").value,
        id_usuario : id_usuario    
            
    };

    fetch("http://127.0.0.1:5000/servidores/", {
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
                alert('Servidor creado exitosamente');
                location.reload();
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
