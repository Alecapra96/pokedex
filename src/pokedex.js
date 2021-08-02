let $pokemonList = document.querySelector("#pokemon-list-div");
let $actualPage = document.querySelector("#actual-page");
const spinner = document.getElementById("spinner");
const price = document.querySelector('#price')
const output = document.querySelector('.price-output')


let count = 1; //show the number of the pokemon in the api url
let countPokemon = 1; //show the number of the pokemon that are being created
let countPage =1; //show the number of the page
let limitPagePokemons = 62; //62 pokemon per page
let $btnNext = document.querySelector("#btn-next");
let array = [];

function createMainPage(){
 
    pageNumber();
    if (countPokemon <= limitPagePokemons){
        fetchPokemon();
        countPokemon++;
        
    }
}
function fetchPokemon(){
    if (countPage >=2){
        spinner.removeAttribute('hidden');

    }
    if(countPokemon ===1){
        loadingScreen();
    }
fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
  .then(response => response.json())
  .then(data => {
        spinner.setAttribute('hidden', '');
        
        addDiv();
        completeDiv(data);
        createMainPage();
        showInfo(data);
        if (countPokemon === limitPagePokemons){
            let $logo = document.querySelector("#logo");
            $logo.remove();
            //si se crearon los 25 divs le saco el hide para que me los muestre
            console.log("ahora muyestro");
            array.forEach(element => {
                element.style.display = '';
            });
        }else{}

    });
}
function addDiv () {
    let createDiv = document.createElement("div");
    createDiv.setAttribute("id", `pokemon-${count}`);
    createDiv.setAttribute("class", "pokemonDivs");
    createDiv.style.display = 'none';
    
    $pokemonList.appendChild(createDiv);

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
    if($divShowInfo != null){
        $divShowInfo.remove();
    }
    wipeDivs()
    countPage++; //aumenta el contador de la pagina
    countPokemon = 1;
    $actualPage.textContent = countPage;

    createMainPage();

}
function btnAfterClick (){
    if(countPage > 1){
        let $divShowInfo = document.querySelector("#div-show-info");
        if($divShowInfo != null){
            $divShowInfo.remove();
        }
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
            
            let $createDiv = document.querySelector("#div-show-info")
            let createDivimg = document.createElement("div");
            createDivimg.setAttribute("id", `div-show-info-img`);
            $createDiv.appendChild(createDivimg);
    
            let img = document.createElement("img");
            img.id = "img-show-info"
            img.src = data.sprites.other.dream_world.front_default;
            createDivimg.appendChild(img);

            let createDivtext = document.createElement("div");
            createDivtext.setAttribute("id", `div-show-info-text`);
            $createDiv.appendChild(createDivtext);

            completeTextPokemon(data);

            let createDivbutton = document.createElement("div");
            createDivbutton.setAttribute("id", `div-show-info-button`);
            $createDiv.appendChild(createDivbutton);
            let btn = document.createElement("button");
            btn.id = "btn-close";
            createDivbutton.appendChild(btn);
            btn.textContent = "cerrar";


        }
    });
}
function completeTextPokemon(data){
    let pokemonData =[];
    let $div = document.querySelector("#div-show-info-text");
    let h1 = document.createElement("h1");
    h1.innerText = data.name;
    $div.appendChild(h1);
    pokemonData.push("Altura = "+ data.height,"Peso = "+data.weight,"Experiencia base = "+data.base_experience,"Especie = "+data.species.name,)
    
    for (i = 0; i < pokemonData.length; i++) {
          var p = document.createElement("p");
        let contenido = pokemonData[i];

        p.appendChild(document.createTextNode(contenido));
        $div.appendChild(p);
    }
    var ability = document.createElement("p");
    ability.appendChild(document.createTextNode("Habilidades:"));
    $div.appendChild(ability);

    let abilityArray = [];
    abilityArray.push(data.abilities)
    var ul=document.createElement('ul');
    $div.appendChild(ul);
    const element = abilityArray[0];

        
        console.log(data.abilities.length)
    for (let index = 0; index < data.abilities.length; index++) {
        console.log(index)
        var li=document.createElement('li');
        li.setAttribute('class','item');
        ul.appendChild(li);
        li.innerHTML=element[index].ability.name;
    }


}
function wipeDivs(){
    for (let index = 0; index < array.length; index++) {
        let $deleteDiv = array[index];
        $deleteDiv.remove();
    }
}
function loadingScreen(){
    console.log($pokemonList);
    let img = document.createElement("img");
    img.id = "logo";
    img.src = "logo.png"
    $pokemonList.appendChild(img);

    // setTimeout(() => {
    //     createMainPage();
    // }, 1000);
}
function pageNumber(){
    output.textContent = price.value
    price.addEventListener('input', function() {
        output.textContent = price.value 
    });
    
    limitPagePokemons = Number(price.value);
}

createMainPage();