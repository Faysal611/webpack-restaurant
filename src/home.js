import { selectors } from "./selectors";
import homeImgSrc from "./home-img.jpg";

export const home = function() {
    selectors.content.innerHTML = "";
    selectors.content.setAttribute("style", "flex-direction: row; gap: 25px;");
    selectors.btn2.classList.remove("yellow-bg");
    selectors.btn3.classList.remove("yellow-bg");
    selectors.btn1.classList.add("yellow-bg");
    selectors.content.classList.add("content-box");
    const homeImg = document.createElement("img");
    homeImg.src = homeImgSrc;
    selectors.content.appendChild(homeImg);
    const texts = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = "My Amazing Inn";
    title.classList.add("home-title");
    texts.appendChild(title);
    const description = document.createElement("p");
    description.classList.add("home-description");
    description.textContent = "Welcome to the best Inn in the entire universe, here you will find all types of burnt food. Starting at $299.";
    texts.appendChild(description);
    selectors.content.appendChild(texts);
}