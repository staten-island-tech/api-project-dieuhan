
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
  } catch (error){
    console.log(error, "hell nah");
    document.querySelector("h1").textContent = "hell nah";
  } 
}

getData(URL); 

/*  Array.from.sync(getData).then((array)=> console.log(array)) */




function insert(array){
  array.forEach((object)=> {
    DOMSelectors.gallery.insertAdjacentHTML(
      `afterbegin`, `<div class="gallery"> 
      <div class="card"><h2>${object.name}</h2>
      </div>
      </div>`
  )})};