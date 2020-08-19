const menuToggleButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open')
})