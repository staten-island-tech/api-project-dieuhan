import '../css/style.css'
import { DOMSelectors } from './dom';


const URL = "https://data.cityofnewyork.us/resource/uq7m-95z8.json"
async function getData(URL){
  try{
    const response = await fetch(URL);
    const cards = await response.json();
    cards.forEach((cards)=> console.log(cards.school_name, cards.borough));
  } catch(error){
    console.log(error);
  }
};

getData(URL);


