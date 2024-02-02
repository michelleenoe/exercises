import {getRandomNumber} from "../Modules/script.js"
import {getRandomHSLColor} from "../module_test/colors.js"
import { $, $$ } from "../module_test/dom.js"

const h1 = $("h1");
const ps = $$("p");

h1.textContent = `Random number: ${getRandomNumber(100)}`;

h1.style.backgroundColor = "getRandomHSLcolor()";

ps.forEach((p) => {
    p.textContent = `Random number :${getRandomNumber(100)}`;
    p.style.color = getRandomHSLColor();
});