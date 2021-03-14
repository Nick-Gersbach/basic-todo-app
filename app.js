const darkModeBtn = document.querySelector('.dark-mode-engage');

darkModeBtn.addEventListener('click', darkMode);

function darkMode() {
    document.querySelector('.main-body').style.background = "black";
    darkModeBtn.className = 'dark-btn';
}