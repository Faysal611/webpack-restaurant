import "./styles.css";
import {about} from "./about.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { selectors } from "./selectors.js";

about();
selectors.btn1.addEventListener("click", home);
selectors.btn2.addEventListener("click", menu);
selectors.btn3.addEventListener("click", about);

