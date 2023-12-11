import '../css/style.css'
import { DOMSelectors } from './dom';
/* 
const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
async function getData(URL){
  try{
    const response = await fetch(URL);
    if (response.status != 200){
      throw new Error(response.statusText)
    }
    const cards = await response.json();
    insert(cards);
/*     cards.results.forEach((cards)=> console.log(cards));
    document.getElementById("api-response").textContent = cards.cards;
    console.log(cards.cards);  */
/*   } catch (error){
    console.log(error, "hell nah");
    document.querySelector("h1").textContent = "hell nah";
  } 
}

getData(URL);  */ 

/*  Array.from.sync(getData).then((array)=> console.log(array)) */


/* 

function insert(array){
  array.forEach((object)=> {
    DOMSelectors.gallery.insertAdjacentHTML(
      `afterbegin`, `<div class="gallery"> 
      <div class="card"><h2>${object.name}</h2>
      </div>
      </div>`
  )})}; */


  const url = 'https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a1b8b8d8cmshdd9bb1de8eabbd9p10d3e9jsn1f897a58880c',
		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}