import "../styles/style.css";
import { ApiLinks, DOMSelectors } from "./dom";

function insertHTML(input, image) {
  DOMSelectors.parent.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card">
  <h2 class=dog-class>${input}</h2>
  <img class="display-image" src="${image}" alt="display image of a ${input} dog">
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
    const Data = object.message;
    const primaryBreeds = Object.keys(Data);
    console.log(primaryBreeds);
    const subBreeds = Object.values(Data).filter(
      (object) => object.length >= 1
    );
    console.log(subBreeds);
    const data = primaryBreeds.concat(...subBreeds);
    console.log(data);
    return primaryBreeds;
  } catch (error) {
    console.log(error);
  }
}

async function getImage(URL) {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${URL}/images/random`
    );
    const image = await response.json();
    console.log(`status code: ${response.status}`);
    return image.message;
  } catch (error) {
    console.log(error);
  }
}

async function init(x) {
  let promise = await x;
  let response = promise.response;
  return promise;
}

function startUp() {
  clear();
  getData(ApiLinks.Breeds).then((data) => {
    data.forEach((breed) => {
      parentInserter(breed);
    });
  });
}

async function parentInserter(breed) {
  let image = await getImage(breed);
  insertHTML(breed, image);
}

function clear() {
  DOMSelectors.parent.innerHTML = "";
  DOMSelectors.input.value = "";
}

startUp();

DOMSelectors.all.addEventListener("cick", function (event) {
  startUp();
  event.preventDefault();
});

DOMSelectors.button.addEventListener("click", function (event) {
  const breed = DOMSelectors.input.value.toLowerCase();
  console.log(breed);
  getData(ApiLinks.Breeds).then((data) => {
    console.log(data);
    if (data.includes(breed)) {
      parentInserter(breed);
    } else {
      DOMSelectors.parent.innerHTML = DOMSelectors.errorHTML;
    }
  });
  clear();
  event.preventDefault();
});

async function hello() {
  let hello = await fetch`https://dog.ceo/api/breed/irish/images/rando`;
  let hi = await hello;
  parentInserter(irish, hi);
  console.log(hi);
  console.log(`status code: ${response.status}`);
}
