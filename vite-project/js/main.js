import '../css/style.css'

const URL = "https://api.pokemontcg.io/v1/cards";

async function getData(URL){
  try{
    const response = await fetch(URL);
    const cards = await response.json();
    document.getElementById("api-response").textContent = cards.cards;
    console.log(cards.cards);
  } catch (error){
    console.log(error);
  }
}
getData(URL);
