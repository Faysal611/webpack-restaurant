import { selectors } from "./selectors";

export const about = function() {
    selectors.content.innerHTML = "";
    selectors.btn3.classList.add("yellow-bg");
    selectors.btn1.classList.remove("yellow-bg");
    selectors.btn2.classList.remove("yellow-bg");
}