const btnGenerador = document.getElementById("btnGenerador");
const divContenedor = document.getElementById("contenedor");
btnGenerador.addEventListener("click",()=>
{
    fetch ("https://api.thecatapi.com/v1/images/search")
    .then((responce)=>responce.json())
    .then((data)=>
    {
        divContenedor.innerHTML="";
        divContenedor.innerHTML+= `<img src= ${data[0].url}>`;
    })
});