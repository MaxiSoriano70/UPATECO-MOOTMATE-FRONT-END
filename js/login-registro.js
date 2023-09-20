document.getElementById("inicio_sesion").addEventListener("submit", function (event) {
    event.preventDefault();
    inicio_sesion();
})

document.getElementById("registrarse").addEventListener("submit", function (event) {
    event.preventDefault();
    registrarse();
})

let loginRegistro=document.querySelector('.login-registro');
let registro=document.querySelector('.link .registrarse-link');
let login=document.querySelector('.link .iniciar-sesion-link');

registro.addEventListener('click',()=>{
    loginRegistro.classList.add('animacion-logueo');
    loginRegistro.classList.remove('animacion-registro');
});

login.addEventListener('click',()=>{
    loginRegistro.classList.add('animacion-registro');
    loginRegistro.classList.remove('animacion-logueo');
});


function inicio_sesion(){
    const data = {
        alias: document.getElementById("alias").value,
        contrasena: document.getElementById("contrasena").value,
    };
    
    fetch("http://127.0.0.1:5000/login",{method:'POST',
    headers: {'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include'
    })
    .then(Response=>{
        if (Response.status===200){
            //redireccionar a la pagina del perfi si el login es correcto
            return Response.json().then(data => {
                window.location.href = "profile.html";
            });
        }else{
            return Response.json().then(data => {
                document.getElementById("message").innerHTML = data.message;
            });    
        }
    })
    .catch(error => {
        document.getElementById("message").innerHTML ="A ocurrido un error"
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