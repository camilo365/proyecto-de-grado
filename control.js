
let btnregistrar = document.getElementById("btnregistrar")
let fondologin = document.getElementById("fondologin")

let modalregistrar = document.getElementById("modal")
/*  */
let btningresar = document.getElementById("btningresar")
let carga = document.getElementById("carga")
let imagencarga = document.getElementById("imagencarga")

btningresar.addEventListener("click",function(){
    carga.style.display = "flex"
    imagencarga.style.display = "flex"
})

btnregistrar.addEventListener("click",function(){
    fondologin.style.display = "none"
    modalregistrar.style.display = "block"
    
}) 




