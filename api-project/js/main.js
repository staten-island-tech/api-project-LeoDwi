import "../styles/style.css";
import { ApiLinks, DOMSelectors } from "./dom";

function insertHTML(x, y) {
  parent.insertAdjacentHTML(
    "afterend",
    `
  <div class="card">
  <h1 class=dog-class>${x.Breeds}</h1>
  <img class="display-image" src="${y.image}" alt="display image">
  </div>`
  );
}

function clearInput() {
  DOMSelectors.input.innerHTML = "";
}

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    document.getElementById("cards").innerHTML = data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

getData(ApiLinks.Breeds);
getData("https://dog.ceo/api/breed/Husky/image/random");

DOMSelectors.button.addEventListener("click", function (event) {
  getData(ApiLinks.Breeds);
  //console.log(data);
  //insertHTML(data);
  clearInput();
  event.preventDefault();
});
