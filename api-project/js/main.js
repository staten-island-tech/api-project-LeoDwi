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
    const object = await response.json();
    const data = Object.values(object);
    console.log(data);
    //return data;
  } catch (error) {
    console.log(error);
  }
}

getData(ApiLinks.Breeds);
//getData("https://dog.ceo/api/breed/Shiba/images/random");
console.log(data);

DOMSelectors.button.addEventListener("click", function (event) {
  getData(ApiLinks.Breeds);
  //console.log(data);
  data.forEach((dog) => {
    insertHTML(dog, e);
  });
  clearInput();
  event.preventDefault();
});
