let $pokemonList = document.querySelector("#pokemon-list-div");
let count = 0;

function addDiv () {
    count++
    // let idDiv =  que se sume 1 
    let createDiv = document.createElement("div");
    createDiv.setAttribute("id", `pokemon-${count}`);
    createDiv.setAttribute("class", "tags");
    $pokemonList.appendChild(createDiv);
    createDiv.textContent = "contenido";
}

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json())
  .then(data => {
    let number = 0;
    data.results.forEach(element => {
        addDiv();
        console.log(element)
        Object.keys(data.number).forEach(element => {
            console.log(element)
             number++;
         })
      })
    });


