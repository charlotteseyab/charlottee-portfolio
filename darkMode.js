function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    // Check if the body has the dark-mode class and change the button text accordingly
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});


