import '../css/style.css'
import { DOMSelectors } from './dom';

function insert(arr){
  arr.forEach((object)=> {
    DOMSelectors.gallery.insertAdjacentHTML(
      `afterbegin`, ` 
      <div class="card">
      <h2 class="school">${object.school_name}</h2>
      <div class="buttons">
      <button class="btn">new info</button>
      </div>
      </div>`
    )})};

    


const URL = "https://data.cityofnewyork.us/resource/uq7m-95z8.json"

let arr = [];
 async function getData(URL){
  try{
    const response = await fetch(URL);
    const cards = await response.json();
   insert(cards)
   arr = cards;
    cards.forEach((cards)=> (cards.school_name));
  } catch(error){
    console.log("Error fetching data", error);
  }
};

getData(URL);

 

function clear_screen(){
  const element = document.querySelector(".gallery");
  element.innerHTML = ""
 };

 
 let buttons = document.querySelectorAll(".mbtn, .qbtn, .bkbtn, .sibtn, .bxbtn")

 buttons.forEach((btn)=> 
 btn.addEventListener("click", function(){

  let card = btn.textContent;
  let newarr = arr.filter((cards)=> cards.borough === card);
  clear_screen();
  insert(newarr);
 }));

/*  DOMSelectors.buttons.addEventListener("click", function(){
  clear_screen();
 insert(arr)
 });
 */
/*  DOMSelectors.buttons.addEventListener('click', function (event) {
  const clickedButton = event.target;
  if (
    clickedButton.classList.contains('mbtn') ||
    clickedButton.classList.contains('qbtn') ||
    clickedButton.classList.contains('bkbtn') ||
    clickedButton.classList.contains('sibtn') ||
    clickedButton.classList.contains('bxbtn')
  ) {
    let borough = clickedButton.textContent.toLowerCase();
    let newarr = arr.filter((card) => card.borough.toLowerCase() === borough);
    clearScreen();
    insert(newarr);
  }
});

// Assuming DOMSelectors.showAllButton represents the "Show All" button
DOMSelectors.showAllButton.addEventListener('click', function () {
  clearScreen();
  insert(arr);
});
 */