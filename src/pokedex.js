// let $pokemonList = document.querySelector("#pokemon-list-div");
// let count = 0;

// function addDiv () {

//     let createDiv = document.createElement("div");
//     createDiv.setAttribute("id", `pokemon-${count}`);
//     createDiv.setAttribute("class", "pokemonDivs");
//     $pokemonList.appendChild(createDiv);
//     createDiv.textContent = "contenido";
// }
// function completeDiv(element){
//     let name = element.name;
//     let url = element.url;
//     let $selectedDiv = document.querySelector(`#pokemon-${count}`)
//     $selectedDiv.textContent = name;
//     count++
// }
// function showInfo(){
//     let $pokemonDivs =document.querySelectorAll(".pokemonDivs")
//     $pokemonDivs.forEach(function(pokemon){
//         pokemon.onclick=function(){
//             fetchShowInfo();
//         }
//     })
// }
// function fetchShowInfo(){
//     fetch(`https://pokeapi.co/api/v2/pokemon/1`)
//     .then(response => response.json())
//     .then(data => {
//        data.results.forEach(element => {
//             console.log(element)
//             })
//        });

// }
// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(response => response.json())
//   .then(data => {
//     data.results.forEach(element => {
//         addDiv();
//         completeDiv(element);
//         showInfo();
//       })
//     });


let $pokemonList = document.querySelector("#pokemon-list-div");
let count = 0;
Creo un div grande que sea la "pagina" donde se muestran los pokemones, cuando cambio de pagina, se wipean los datos de dentro y hago una fetch a la proxima pagina de la api
Creo 20 casillas para los pokemones ,dentro de este div , sumandole un numero a el ultimo digito de el link de la api en cada cuadro 
muestro la informacion de los pokemones en cada cuadro cuando le hagan click.


