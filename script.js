const menu = document.querySelector('.menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');
const buttons = document.querySelectorAll(".button");
const exitButtons = document.querySelectorAll('#x');
const pupup = document.querySelector("#popup");

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}
ham.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menuLink');

menuLinks.forEach(
  (menuLink) => {
    menuLink.addEventListener('click', toggleMenu);
  },
);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        pupup.classList.toggle("hide-item")
    });
})

exitButtons.forEach(button => {
    button.addEventListener("click", () => {
        pupup.classList.toggle("hide-item")
    });    
})
