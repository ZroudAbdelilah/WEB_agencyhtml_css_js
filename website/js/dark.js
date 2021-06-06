const darkStyleHref = "./css/dark.css";
const themeController = document.querySelector('.theme-controller');
const themeControllerButton = document.querySelector('.theme-controller .button');
const themeControllerSwitcher = document.querySelector('.switsher input[type=checkbox]')
const darkModeLink = document.querySelector("#dark-mode-link");
window.addEventListener("load", () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
        darkModeLink.href = darkStyleHref;
        themeControllerSwitcher.checked = true;
    } else {
        darkModeLink.href = "";
        themeControllerSwitcher.checked = false;
    }
})

themeControllerButton.addEventListener('click', () => {
    themeController.classList.toggle('show');
});

themeControllerSwitcher.addEventListener('click', e => {
    if (e.target.checked) {
        darkModeLink.href = darkStyleHref;
    } else {
        darkModeLink.href = "";
    }
})