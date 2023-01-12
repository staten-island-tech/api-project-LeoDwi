import "../styles/style.css";
import { ApiLinks, DOMSelectors } from "./dom";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

getData(ApiLinks.Breeds);
getData(ApiLinks.Images);
