import { selectors } from "./selectors";

export const menu = function() {
    selectors.btn2.classList.add("yellow-bg");
    selectors.btn1.classList.remove("yellow-bg");
    selectors.btn3.classList.remove("yellow-bg");
    selectors.content.innerHTML = "";
    selectors.content.setAttribute("style", "flex-direction: column; gap: 0px;");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Checkout our amazing menu";
    menuTitle.setAttribute("style", "color: black; font-family: Georgia; font-size: 45px;");
    selectors.content.appendChild(menuTitle);
    const item1 = document.createElement("p");
    item1.textContent = "Fish, Krispy as coal! (Chef accidentally brunt it) --- $549";
    item1.setAttribute("style", "color: #575757; font-family: Georgia; font-size: 25px;");
    selectors.content.appendChild(item1);
    const item2 = document.createElement("p");
    item2.textContent = "Ancient burger (It was rotting in fridge) --- $299";
    item2.setAttribute("style", "color: #575757; font-family: Georgia; font-size: 25px;");
    selectors.content.appendChild(item2);
    const item3 = document.createElement("p");
    item3.textContent = "Super secret dish (!$@%#^@%^^^) --- $1099";
    item3.setAttribute("style", "color: #575757; font-family: Georgia; font-size: 25px;");
    selectors.content.appendChild(item3);
    const item4 = document.createElement("p");
    item4.textContent = "Super Duper secret dish (!$@%#^@%^^^) --- $1099";
    item4.setAttribute("style", "color: #575757; font-family: Georgia; font-size: 25px;");
    selectors.content.appendChild(item4);
    const item5 = document.createElement("p");
    item5.textContent = "Super secret drink (!$@%#^^&$*#^@%^^^) --- $1099";
    item5.setAttribute("style", "color: #575757; font-family: Georgia; font-size: 25px;");
    selectors.content.appendChild(item5);
    const item6 = document.createElement("p");
    item6.textContent = "Normal bread (!$@%#^@%^**#&#^^^) --- $1299";
    item6.setAttribute("style", "color: #575757; font-family: Georgia; font-size: 25px;");
    selectors.content.appendChild(item6);
}