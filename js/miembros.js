/*MODAL DE BANEAR*/
const buttonBanear1=document.querySelector(".btn-banear").classList.add("btn-ban-1");
const btnBanear1=document.querySelector(".btn-ban-1");

const buttonBanearCerrar1=document.querySelector(".btn-banear-cerrar").classList.add("btn-ban-cerrar-1");

const btnBanearCerrar1=document.querySelector(".btn-ban-cerrar-1");

const modalBanear1=document.querySelector(".contenedor-modal-banear");
modalBanear1.classList.add("cont-modal-ban-1");
const contModalBanear1=document.querySelector(".cont-modal-ban-1");

const pantallaCerrarBanear1=contModalBanear1.querySelector(".cerrar-modal");

btnBanear1.addEventListener("click",()=>{
    contModalBanear1.classList.add("mostrar");
});

btnBanearCerrar1.addEventListener("click",()=>{
    contModalBanear1.classList.remove("mostrar");
});

pantallaCerrarBanear1.addEventListener("click",()=>{
    contModalBanear1.classList.remove("mostrar");
});

/*MODAL DE EDITAR*/
const buttonPrivilegio1=document.querySelector(".btn-privilegios").classList.add("btn-pri-1");
const btnPrivilegio1=document.querySelector(".btn-pri-1");

const buttonPrivilegioCerrar1=document.querySelector(".btn-privilegio-cerrar").classList.add("btn-pri-cerrar-1");

const btnPrivilegioCerrar1=document.querySelector(".btn-pri-cerrar-1");

const modalPrivilegio1=document.querySelector(".contenedor-modal-privilegio");
modalPrivilegio1.classList.add("cont-modal-privilegio-1");
const contModalPrivilegio1=document.querySelector(".cont-modal-privilegio-1");

const pantallaCerrarPrivilegio1=contModalPrivilegio1.querySelector(".cerrar-modal");

btnPrivilegio1.addEventListener("click",()=>{
    contModalPrivilegio1.classList.add("mostrar");
});

btnPrivilegioCerrar1.addEventListener("click",()=>{
    contModalPrivilegio1.classList.remove("mostrar");
});

pantallaCerrarPrivilegio1.addEventListener("click",()=>{
    contModalPrivilegio1.classList.remove("mostrar");
});

/*MODAL DE SILENCIAR*/
const buttonSilenciar1=document.querySelector(".btn-silenciar").classList.add("btn-silen-1");
const btnSilenciar1=document.querySelector(".btn-silen-1");

const buttonSilenciarCerrar1=document.querySelector(".btn-silenciar-cerrar").classList.add("btn-silen-cerrar-1");

const btnSilenciarCerrar1=document.querySelector(".btn-silen-cerrar-1");

const modalSilenciar1=document.querySelector(".contenedor-modal-silenciar");
modalSilenciar1.classList.add("cont-modal-silen-1");
const contModalSilenciar1=document.querySelector(".cont-modal-silen-1");

const pantallaCerrarSilenciar1=contModalSilenciar1.querySelector(".cerrar-modal");

btnSilenciar1.addEventListener("click",()=>{
    contModalSilenciar1.classList.add("mostrar");
});

btnSilenciarCerrar1.addEventListener("click",()=>{
    contModalSilenciar1.classList.remove("mostrar");
});

pantallaCerrarSilenciar1.addEventListener("click",()=>{
    contModalSilenciar1.classList.remove("mostrar");
});