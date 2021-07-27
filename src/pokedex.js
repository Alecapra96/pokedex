let $pokemonList = document.querySelector("#pokemon-list-div");
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
    console.log(`https://pokeapi.co/api/v2/pokemon/${count}`)
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
    
    $pokemonList.appendChild(createDiv);
    createDiv.textContent = "contenido";
    let $arrayPush = document.querySelector(`#pokemon-${count}`);
    array.push($arrayPush);
}
function completeDiv(element){
    let name = element.name;
    let img = document.createElement("img");
    let $selectedDiv = document.querySelector(`#pokemon-${count}`)
    img.src = element.sprites.other.dream_world.front_default;

    $selectedDiv.textContent = name;
    $selectedDiv.appendChild(img);

    count++
}
function btnNextClick (){
    for (let index = 0; index < array.length; index++) {
        let $deleteDiv = array[index];
        //   = document.querySelector("#pokemon-1");
        $deleteDiv.remove();
        }

    //wipea los div 
    countPage++; //aumenta el contador de la pagina
    countPokemon = 1;
    createMainPage();

}

createMainPage();
console.log(array);