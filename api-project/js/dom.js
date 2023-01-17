function image(x) {
  const image = `https://dog.ceo/api/${x}/hound/images`;
}

export const DOMSelectors = {
  input: document.getElementById("breed"),
  button: document.getElementById("btn"),
  parent: document.getElementById("cards"),
};

export const ApiLinks = {
  Breeds: "https://dog.ceo/api/breeds/list/all",
  Images: image(DOMSelectors.input.value),
};
