const body=document.querySelector("body");
const header=body.querySelector("header");
const toggle=body.querySelector(".toggle");
const contendorBuscar=body.querySelector(".buscador");
const modoSwitch=body.querySelector(".toggle-switch");
const modoText=body.querySelector(".modo-texto");

toggle.addEventListener("click",()=>{
    header.classList.toggle("close");
});

modoSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark");
});

/*MODAL DE EDITAR*/
const buttonEditar1=document.querySelector(".btn-editar").classList.add("btn-edi-1");
const btnEditar1=document.querySelector(".btn-edi-1");

const buttonEditarCerrar1=document.querySelector(".btn-editar-cerrar").classList.add("btn-edi-cerrar-1");

const btnEditarCerrar1=document.querySelector(".btn-edi-cerrar-1");

const modalEditar1=document.querySelector(".contenedor-modal-editar");
modalEditar1.classList.add("cont-modal-editar-1");
const contModalEditar1=document.querySelector(".cont-modal-editar-1");

const pantallaCerrarEditar1=contModalEditar1.querySelector(".cerrar-modal");

btnEditar1.addEventListener("click",()=>{
    contModalEditar1.classList.add("mostrar");
});

btnEditarCerrar1.addEventListener("click",()=>{
    contModalEditar1.classList.remove("mostrar");
});

pantallaCerrarEditar1.addEventListener("click",()=>{
    contModalEditar1.classList.remove("mostrar");
});


/*MODAL DE ELIMINAR*/
const buttonEliminar1=document.querySelector(".btn-eliminar").classList.add("btn-eli-1");
const btnEliminar1=document.querySelector(".btn-eli-1");

const buttonEliminarCerrar1=document.querySelector(".btn-eliminar-cerrar").classList.add("btn-eli-cerrar-1");

const btnEliminarCerrar1=document.querySelector(".btn-eli-cerrar-1");

const modalEliminar1=document.querySelector(".contenedor-modal-eliminar");
modalEliminar1.classList.add("cont-modal-eli-1");
const contModalEliminar1=document.querySelector(".cont-modal-eli-1");

const pantallaCerrarEliminar1=contModalEliminar1.querySelector(".cerrar-modal");

btnEliminar1.addEventListener("click",()=>{
    contModalEliminar1.classList.add("mostrar");
});

btnEliminarCerrar1.addEventListener("click",()=>{
    contModalEliminar1.classList.remove("mostrar");
});

pantallaCerrarEliminar1.addEventListener("click",()=>{
    contModalEliminar1.classList.remove("mostrar");
});