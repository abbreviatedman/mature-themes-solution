window.onload = init;

function init() {
    const toggleButtons = Array.from(document.querySelectorAll('.toggle-button'));
    toggleButtons.forEach((button) => button.addEventListener('click', toggleTheme));
}

function toggleTheme(event) {
    event.preventDefault();

    const toggleButtons = Array.from(document.querySelectorAll('.toggle-button'));
    toggleButtons.forEach((button) => button.classList.toggle('dark-theme'));
}