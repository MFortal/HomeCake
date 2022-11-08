// Анимация по скроллу
// const items = document.querySelectorAll("");
// if (items.length > 0) {
//   window.addEventListener("scroll", animOnScroll);

//   function animOnScroll() {
//     for (let index = 0; index < items.length; index++) {
//       const item = items[index];
//       const itemHeight = item.offsetHeight;
//       const itemOffset = offset(item).top;
//       const start = 1;

//       let itemPoint = window.innerHeight - itemHeight / start;

//       if (itemHeight > window.innerHeight) {
//         itemPoint = window.innerHeight - window.innerHeight / start;
//       }

//       if (
//         scrollY > itemOffset - itemPoint &&
//         scrollY < itemOffset + itemHeight
//       ) {
//         item.classList.add("_active");
//       } else {
//         if (!item.classList.contains("_anim-no-hide")) {
//           item.classList.remove("_active");
//         }
//       }
//     }
//   }

//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//       scrollTop = window.scrollX || document.documentElement.scrollTop;
//     return {
//       top: rect.top + scrollTop,
//       left: rect.left + scrollLeft,
//     };
//   }
//   animOnScroll();
// }

// Кнопка "Еще"
let buttonToggle = document.getElementsByClassName("buttonToggle");

Array.from(buttonToggle).forEach((b) => {
  b.addEventListener("click", () => {
    let count;
    b.previousSibling.classList.contains("taste__cards")
      ? (count = 4)
      : (count = 2);
    for (let i = count; i < b.previousSibling.childNodes.length; i++) {
      b.previousSibling.childNodes[i].classList.toggle("_display");
    }
    let text = b.querySelector(".buttonToggle__text");
    let arrow = b.querySelector(".buttonToggle__arrow");
    if (text.textContent != "Еще") {
      text.textContent = "Еще";
      b.scrollIntoView(false);
    } else {
      text.textContent = "Свернуть";
    }
    arrow.classList.toggle("_rotate_90");
  });
});

// Функция якоря на кнопку
function addHref(bClass, bHref) {
  let button = document.querySelector(bClass);
  button.addEventListener("click", () => {
    location.href = bHref;
  });
}

// Якорь на кнопку "Связаться со мной"
addHref(".offer__button", "#contact");
// Якорь на кнопку "Посмотреть работы"
addHref(".main__button", "#assortment");

// Карусель для отзывов
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".slider");
const track = document.querySelector(".slides");
const item = document.querySelectorAll(".slider__review");
const btnPrev = document.querySelector(".slider__nav_arrowPrev");
const btnNext = document.querySelector(".slider__nav_arrowNext");
const itemsCount = item.length;
const itemWidth = container.offsetWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

item.forEach(function (item) {
  item.style.minWidth = itemWidth + "px";
});

btnNext.onclick = function () {
  console.log("next");
  position -= movePosition;
  setPosition();
  checkBtns();
};

btnPrev.onclick = function () {
  console.log("prev");
  position += movePosition;
  setPosition();
  checkBtns();
};

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  if (position == 0) {
    btnPrev.disabled = true;
    btnPrev.firstChild.classList.add("arrow_disable");
  } else {
    btnPrev.disabled = false;
    btnPrev.firstChild.classList.remove("arrow_disable");
  }

  if (position <= -(itemsCount - slidesToShow) * itemWidth) {
    btnNext.disabled = true;
    btnNext.firstChild.classList.add("arrow_disable");
  } else {
    btnNext.disabled = false;
    btnNext.firstChild.classList.remove("arrow_disable");
  }
};

checkBtns();

// Установка отступа для главной страницы
const main = document.querySelector("#main");
const header = document.querySelector(".header");

const setPaddingMain = () => {
  main.style.paddingTop = --header.offsetHeight + "px";
};

window.onload = function () {
  setPaddingMain();
  // Убирание прелодера при полной загрузке
  document
    .querySelector(".preloader-container")
    .classList.add("preloader_close");
};

window.onresize = function () {
  setPaddingMain();
};
