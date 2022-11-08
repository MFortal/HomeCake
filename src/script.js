import { addHref } from "./js/addHref.js";
import { checkBtns } from "./js/setSlider.js";
import { addToggleEvent } from "./js/addToggleEvent.js";
import { setOnloadEvent } from "./js/setOnloadEvent.js";

// Якорь на кнопку "Связаться со мной"
addHref(".offer__button", "#contact");
// Якорь на кнопку "Посмотреть работы"
addHref(".main__button", "#assortment");
// Сладер
checkBtns();
// Добавление событий раскрытия/закрытия для кнопок 'Еще'
addToggleEvent();
// Onload
setOnloadEvent();
