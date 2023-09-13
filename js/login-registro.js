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