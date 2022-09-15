// Анимация по скроллу
const items = document.querySelectorAll('._anim-items');
if (items.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      const itemHeight = item.offsetHeight;
      const itemOffset = offset(item).top;
      const start = 2;

      let itemPoint = window.innerHeight - itemHeight / start;

      if (itemHeight > window.innerHeight) {
        itemPoint = window.innerHeight - window.innerHeight / start;
      }

      if ((scrollY > itemOffset - itemPoint) && scrollY < (itemOffset + itemHeight)) {
        item.classList.add('_active');
      } else {
        if (!item.classList.contains('_anim-no-hide')) {
          item.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollX || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }
  animOnScroll();
}

// Кнопка "Еще"
let buttonToggle = document.getElementsByClassName("buttonToggle");

Array.from(buttonToggle).forEach(b => {
  b.addEventListener("click", () => {
    b.previousSibling.classList.toggle('_expand');
    let text = b.querySelector('.buttonToggle__text');
    let arrow = b.querySelector('.buttonToggle__arrow');
    text.textContent == "Еще" ? text.textContent = "Свернуть" : text.textContent = "Еще";
    arrow.classList.toggle('_rotate_90');
  })
});