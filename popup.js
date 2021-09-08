const buttons = document.querySelectorAll(".button");
const xp = document.querySelector('.xIcon');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const pupup = document.querySelector("#popup");
        pupup.classList.toggle("hide-item")
    });
})

function projOn() {
  projs.forEach(
    (work) => {
      work.style.filter = 'blur(4px)';
    },
  );
}

function projOff() {
  projs.forEach(
    (work) => {
      work.style.filter = 'blur(0px)';
    },
  );
}

function closeModal() {
    modal.style.display = 'none';
    main.style.filter = 'blur(0px)';
    header.style.filter = 'blur(0px)';
    projOff();
  }

xp.onclick = function x() {
    closeModal();
    clearModal();
};
  