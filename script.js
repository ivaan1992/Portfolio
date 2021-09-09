//  Menu mobile function

const menu = document.querySelector('.menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');

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

//  Popup function

const popup = document.getElementById('popup-project');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

button1.addEventListener('click', () => {
  popup.classList.add('popup-active');
});
button2.addEventListener('click', () => {
  popup.classList.add('popup-active');
});
button3.addEventListener('click', () => {
  popup.classList.add('popup-active');
});
button4.addEventListener('click', () => {
  popup.classList.add('popup-active');
});

const projects = [
  {
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: './images/Snapshoot-Portfolio.png',
    technologies: ['html', 'ruby', 'css'],
    liveURL: 'https://www.github.com',
    link: 'https://ivaan1992.github.io/Portfolio/',
  },
];

projects.forEach((item) => {
  popup.innerHTML += `
<div class="allpopup">
<h2 class="popup-name">${item.name}</h2>
<span onclick="popup.classList.remove('popup-active')"
class="close-popup">x</span>
<div class="snapshoot"> <img class="snapshoot-pic" src="${item.image}"
alt="Project"></div>
<p class="paragraph-window">${item.description}</p>
<ul class="ul-list-window">
<li class="list-lang">${item.technologies[0]}</li>
<li class="list-lang">${item.technologies[1]}</li>
<li class="list-lang">${item.technologies[2]}</li>
</ul>
<div class="button-div">
<form  action="${item.link}" method="get" target="_blank">
         <button class="popup-buttons" type="submit">See Live</button>
      </form>
 <form action="${item.liveURL}" method="get" target="_blank">
         <button class="popup-buttons" type="submit">See Source</button>
      </form>
      </div>
      </div>
`;
});

// Form

const contactForm = document.querySelector('#form');

function validateEmail() {
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('#email-error');
  const emailLowerCase = emailInput.value.toLowerCase();

  if (emailInput.value !== emailLowerCase) {
    emailError.innerHTML = `Your email should be in lower case please use "<span style="color:black">${emailLowerCase}</span>" instead.`;
    return false;
  }
  return true;
}

contactForm.addEventListener('submit', (sub) => {
  if (!validateEmail()) {
    sub.preventDefault();
  }
});