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