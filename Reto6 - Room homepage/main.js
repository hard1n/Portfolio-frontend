const navOpenBtn = document.getElementById("nav-open");
const navCloseBtn = document.getElementById("nav-close");
const bgModal = document.querySelector(".bg-modal");
const navBar = document.querySelector(".nav-bar");
console.log (bgModal);

navOpenBtn.addEventListener('click', function () {
    bgModal.classList.add("bg-active");
    navBar.classList.add("nav-active");
});

navCloseBtn.addEventListener('click', function () {
    bgModal.classList.remove("bg-active");
    navBar.classList.remove("nav-active");
});