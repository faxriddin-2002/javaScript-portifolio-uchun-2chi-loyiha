const header = document.querySelector('.header');

window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);
function checkScroll() {
  let scrollPos = window.scrollY;
  if (scrollPos > 0) {
    header.classList.add('header__border_bottom');
    // header.style.paddingTop = "5px";
    // header.style.paddingBottom = "5px";
  } else {
    header.classList.remove('header__border_bottom');
    // header.style.paddingTop = "10px";
    // header.style.paddingBottom = "10px";
  }
}
