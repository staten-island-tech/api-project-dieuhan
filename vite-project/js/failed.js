

// THESE ARE ALL MY FAILED CODES

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
