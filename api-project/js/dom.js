export const DOMSelectors = {
  input: document.getElementById("breed"),
  button: document.getElementById("btn"),
  parent: document.getElementById("cards"),
};

export const ApiLinks = {
  Breeds: "https://dog.ceo/api/breeds/list/all",
  Images: `https://dog.ceo/api/breed/${DOMSelectors.input.value}/images/random`,
};
