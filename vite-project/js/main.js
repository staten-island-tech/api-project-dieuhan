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

getData(URL);
