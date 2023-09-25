/*MODAL DE ELIMINAR*/
const buttonEliminar1=document.querySelector(".btn-eliminar").classList.add("btn-eli-1");
const btnEliminar1=document.querySelector(".btn-eli-1");

const buttonEliminarCerrar1=document.querySelector(".btn-eliminar-cerrar").classList.add("btn-eli-cerrar-1");

const btnEliminarCerrar1=document.querySelector(".btn-eli-cerrar-1");

const modalEliminar1=document.querySelector(".contenedor-modal-eliminar");
modalEliminar1.classList.add("cont-modal-eliminar-1");
const contModalEliminar1=document.querySelector(".cont-modal-eliminar-1");

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


/*MODAL DE SALIR*/
const buttonSalir1=document.querySelector(".btn-salir").classList.add("btn-sa-1");
const btnSalir1=document.querySelector(".btn-sa-1");

const buttonSalirCerrar1=document.querySelector(".btn-salir-cerrar").classList.add("btn-sa-cerrar-1");

const btnSalirCerrar1=document.querySelector(".btn-sa-cerrar-1");

const modalSalir1=document.querySelector(".contenedor-modal-salir");
modalSalir1.classList.add("cont-modal-salir-1");
const contModalSalir1=document.querySelector(".cont-modal-salir-1");

const pantallaCerrarSalir1=contModalSalir1.querySelector(".cerrar-modal");

btnSalir1.addEventListener("click",()=>{
    contModalSalir1.classList.add("mostrar");
});

btnSalirCerrar1.addEventListener("click",()=>{
    contModalSalir1.classList.remove("mostrar");
});

pantallaCerrarSalir1.addEventListener("click",()=>{
    contModalSalir1.classList.remove("mostrar");
});

/*ME ENCANTA LOKITA*/
const meEncantaLokita1=document.querySelector(".label-me-encanta").classList.add("btn-mel-1");
const lblMeEncantaLokita1=document.querySelector(".btn-mel-1");
const btnMeEncantaLokita1=lblMeEncantaLokita1.querySelector(".la-heart");

btnMeEncantaLokita1.addEventListener("click",()=>{
    btnMeEncantaLokita1.classList.toggle("lokita");
});