import '../css/style.css'
import { DOMSelectors } from './dom';

function insert(arr) {
  arr.forEach((object) => {
    DOMSelectors.gallery.insertAdjacentHTML(
      `afterbegin`,
      `<div class="card">
        <h2 class="school">${object.school_name}</h2>
      </div>`
    );
  });
}

const URL = "https://data.cityofnewyork.us/resource/uq7m-95z8.json";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const cards = await response.json();
    insert(cards);
    console.log(cards);

    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", function () {
      console.log("Search button clicked");
      handleSearch(cards);
    });

   
    let buttons = document.querySelectorAll(".mbtn, .qbtn, .bkbtn, .sibtn, .bxbtn");
    buttons.forEach((btn) =>
      btn.addEventListener("click", function () {
        let filtered = btn.textContent.toUpperCase();
        let pls = cards.filter((card) => card.borough.replaceAll(" ", "") === filtered);
        clear_screen();
        insert(pls);
        console.log(pls);
      })
    );

    const showAllBtn = document.getElementById("showAllBtn");
showAllBtn.addEventListener("click", function () {
  clear_screen();
  insert(cards); 
  console.log("All schools:", cards);
});

    return cards;
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

function clear_screen() {
  const element = document.querySelector(".gallery");
  element.innerHTML = "";
}

function handleSearch(cards) {
  const searchInput = document.getElementById("schoolSearch").value.trim();
  console.log("Search input:", searchInput);
  const filteredSchools = cards.filter((card) => card.school_name.includes(searchInput));
  console.log("Filtered schools:", filteredSchools);
  clear_screen();

  if (filteredSchools.length === 0) {
    DOMSelectors.gallery.insertAdjacentHTML(
      "afterbegin",
      `<p class="error-message">No schools found for "${searchInput}"</p>`
    );
  } else {
    insert(filteredSchools);
    console.log("Filtered schools:", filteredSchools);
  }
}
  


getData(URL);


