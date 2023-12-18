import '../css/style.css'
import { DOMSelectors } from './dom';

function insert(arr){
  arr.forEach((object)=> {
    DOMSelectors.gallery.insertAdjacentHTML(
      `afterbegin`, `<div class="btn_container"> 
      </div>
      <div class="gallery">
      <div class="card">
      <h2>${object.school_name}</h2>
      </div>
      </div>`
    )})};


const URL = "https://data.cityofnewyork.us/resource/uq7m-95z8.json"
/*  async function getData(URL){
  try{
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    insert(data)
    cards.forEach((cards)=> console.log(cards.school_name));
  } catch(error){
    console.log(error, "pls try again");
    document.querySelector("h1").textContent = "pls try again";
  }
}; */
 

 async function getData(URL){
  try{
    const response = await fetch(URL);
    const cards = await response.json();
   insert(cards)
    cards.forEach((cards)=> (cards.school_name, cards.borough));
  } catch(error){
    console.log(error);
  }
};

getData(URL);

 

