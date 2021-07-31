let $pokemonList = document.querySelector("#pokemon-list-div");
let $actualPage = document.querySelector("#actual-page");

let count = 1; //show the number of the pokemon in the api url
let countPokemon = 1; //show the number of the pokemon that are being created
let countPage =1; //show the number of the page
const limitPagePokemons = 24; //24 pokemon per page
let $btnNext = document.querySelector("#btn-next");
let array = [];

function createMainPage(){
    if (countPokemon <= limitPagePokemons){
        fetchPokemon();
        countPokemon++;
    }
}
function fetchPokemon(){
    // console.log(`https://pokeapi.co/api/v2/pokemon/${count}`)
fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
  .then(response => response.json())
  .then(data => {
        addDiv();
        completeDiv(data);
        createMainPage();
        showInfo(data);   

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
function btnNextClick (){ //hacer un if que diga que si existe el $divshowinfo haga el codigo de abajo y si no existe haga el codigo desde abajo de wipe()
    let $divShowInfo = document.querySelector("#div-show-info");
    $divShowInfo.remove();
    wipeDivs()
    countPage++; //aumenta el contador de la pagina
    countPokemon = 1;
    $actualPage.textContent = countPage;

    createMainPage();

}
function btnAfterClick (){
    if(countPage > 1){
        let $divShowInfo = document.querySelector("#div-show-info");
    $divShowInfo.remove();
        wipeDivs()
    countPage--; //disminuye el contador de la pagina
    countPokemon = 1;
    count = count - 48;
    $actualPage.textContent = countPage;

    createMainPage();
    }

}
function showInfo(data){
    
    array.forEach(element => {
        element.onclick=function(){
            console.log(element) //sacar de el element el id que es el num del pokemon que hace clickkk
            wipeDivs();
             let createDiv = document.createElement("div");
             createDiv.setAttribute("id", `div-show-info`);
             $pokemonList.appendChild(createDiv);
             createDiv.textContent = "contenido";

             let img = document.createElement("img");
             img.src = data.sprites.other.dream_world.front_default;
             createDiv.appendChild(img);
             return 
        }
    });
}
function wipeDivs(){
    for (let index = 0; index < array.length; index++) {
        let $deleteDiv = array[index];
        $deleteDiv.remove();
        
        }
       

    //wipea the divs
}

createMainPage();
