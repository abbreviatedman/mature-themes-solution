window.onload = init;

function init() {
    const toggleButtons = Array.from(document.querySelectorAll('.toggle-button'));
    toggleButtons.forEach((button) => button.addEventListener('click', toggleTheme));
}

function toggleTheme(event) {
    event.preventDefault();

    const toggleButtons = Array.from(document.querySelectorAll('.toggle-button'));
    toggleButtons.forEach((button) => button.classList.toggle('dark-theme'));


    // One by one approach, if you think the Array.from and forEach is overkill
    // for two elements.
    const toggleButton1 = document.querySelector('.toggle-button-1')
    const toggleButton2 = document.querySelector('.toggle-button-2')
    
    toggleButton1.classList.toggle('.dark-theme')
    toggleButton2.classList.toggle('.dark-theme')
}

const upArray = (arr) => (parseFloat(arr.map((num) => num.toString()).join('')) + 1).toString().split('').map((num) => parseFloat(num));