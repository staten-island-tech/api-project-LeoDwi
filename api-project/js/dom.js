function image(x) {
  let image = `https://dog.ceo/api/breed/${x}/images/random`;
  console.log(image);
  return image;
}

export const DOMSelectors = {
  input: document.getElementById("breed").value,
  button: document.getElementById("btn"),
  parent: document.getElementById("cards"),
};

export const ApiLinks = {
  Breeds: "https://dog.ceo/api/breeds/list/all",
  Images: image(DOMSelectors.input),
};
