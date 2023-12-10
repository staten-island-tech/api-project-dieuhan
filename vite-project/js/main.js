import '../css/style.css'

const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

async function getData(URL){
  //try{
    const response = await fetch(URL);
    const cards = await response.json();
    cards.results.forEach((cards)=> console.log(cards));
  /*   document.getElementById("api-response").textContent = cards.cards;
    console.log(cards.cards); 
  } catch (error){
    console.log(error);
  } */
}

/*  Array.from.sync(getData).then((array)=> console.log(array)) */

getData(URL); 


function insert(array){
  array.forEach((object)=> {
    DOMSelectors.gallery.insertAdjacentHTML(
      "afterbegin"
      `<div class="card"><h2>${object.name}</h2>
      </div>`
  )})};

  insert(pokemon)