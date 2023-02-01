export const DOMSelectors = {
  all: document.getElementById("all"),
  input: document.getElementById("breed"),
  button: document.getElementById("btn"),
  parent: document.getElementById("cards"),
  errorHTML: `<div class="error"><h2 class="notfound">Sorry! We couldn't find what you were looking for!</h2>
  <p>Please check your input for any spelling or grammatical mistakes. Otherwise, we do not have this breed of dog on hand.</p>
  </div>`,
};

export const ApiLinks = {
  Breeds: "https://dog.ceo/api/breeds/list/all",
  Images: `https://dog.ceo/api/breed/${DOMSelectors.input.value}/images/random`,
};
