import { addAnimate } from "./addAnimate.js";

// Установка отступа для главной страницы

const main = document.querySelector("#main");
const header = document.querySelector("#header");

let setPaddingMain = () => {
  main.style.paddingTop = header.offsetHeight - 1 + "px";
};

export let setOnloadEvent = () => {
  window.onload = function () {
    setPaddingMain();
    // Убирание прелодера при полной загрузке
    document
      .querySelector(".preloader-container")
      .classList.add("preloader_close");

    // Запуск анимации
    addAnimate();
  };

  window.onresize = function () {
    setPaddingMain();
  };
};
