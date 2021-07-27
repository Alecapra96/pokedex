let $pokemonList = document.querySelector("#pokemon-list-div");
let $pokemonListDiv1 = document.querySelector("#pokemon-list-div-1");
let $pokemonListDiv2 = document.querySelector("#pokemon-list-div-2");
let $pokemonListDiv3 = document.querySelector("#pokemon-list-div-3");
let $pokemonListDiv4 = document.querySelector("#pokemon-list-div-4");
let $pokemonListDiv5 = document.querySelector("#pokemon-list-div-5");
let count = 1;
let countPokemon = 1;
let countPage =1;
let maxPokemons = 1000;
const limitPage = 20;
let $btnNext = document.querySelector("#btn-next");
let array = [];
// Creo un div grande que sea la "pagina" donde se muestran los pokemones, cuando cambio de pagina, se wipean los datos de dentro 
// y hago una fetch a la proxima pagina de la api
// Creo 20 casillas para los pokemones ,dentro de este div , sumandole un numero a el ultimo digito de el link de la api en cadac uadro 
// muestro la informacion de los pokemones en cada cuadro cuando le hagan click.
function createMainPage(){
    if (countPokemon <= limitPage){
        fetchPokemon();
        countPokemon++;
    }
}
function fetchPokemon(){
fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
  .then(response => response.json())
  .then(data => {
        addDiv();
        completeDiv(data);
        createMainPage();
    });
}
function addDiv () {
    let createDiv = document.createElement("div");
    createDiv.setAttribute("id", `pokemon-${count}`);
    createDiv.setAttribute("class", "pokemonDivs");
    if (count < 5){
        $pokemonListDiv1.appendChild(createDiv);
    }else if (count < 9){
        $pokemonListDiv2.appendChild(createDiv);
    }else if (count < 13){
        $pokemonListDiv3.appendChild(createDiv);
    }else if (count < 17){
        $pokemonListDiv4.appendChild(createDiv);
    }else if (count < 21){
        $pokemonListDiv5.appendChild(createDiv);
    }
    createDiv.textContent = "contenido";
    let $arrayPush = document.querySelector(`#pokemon-${count}`);
    array.push($arrayPush);
}
function completeDiv(element){

    let name = element.name;
    let $selectedDiv = document.querySelector(`#pokemon-${count}`)
    let img = document.createElement("img");
    console.log($selectedDiv)
    img.src = element.sprites.other.dream_world.front_default;
    $selectedDiv.textContent = name;
    $selectedDiv.appendChild(img);
    count++
}
function btnNextClick (){
    for (let index = 0; index < array.length; index++) {
        let $deleteDiv = array[index];
        $deleteDiv.remove();
    }
    //wipea los div 
    countPage++; //aumenta el contador de la pagina
    countPokemon = 1;
    createMainPage();
}
createMainPage();
console.log(array);