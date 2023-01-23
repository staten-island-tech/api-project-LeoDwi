import "../styles/style.css";
import { ApiLinks, DOMSelectors } from "./dom";

function insertHTML(x, y) {
  DOMSelectors.parent.insertAdjacentHTML(
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
    const object = await response.json();
    const data = Object.values(object)[1];
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getImage(URL) {
  try {
    const response = await fetch(URL);
    return response;
  } catch (error) {
    console.log(error);
  }
}

getData(ApiLinks.Breeds);
getData("https://dog.ceo/api/breed/husky/images/random");
console.log(getData(ApiLinks.Breeds));

DOMSelectors.button.addEventListener("click", function (event) {
  getData(ApiLinks.Breeds);
  //console.log(data);
  console.log(ApiLinks.Images);
  getImage(ApiLinks.Images);
  insertHTML(getData(ApiLinks.Breeds), getImage(ApiLinks.Images));
  clearInput();
  event.preventDefault();
});

console.log(ApiLinks.Images);
