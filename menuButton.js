const menuButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const menuContainer = document.getElementById('menu-container');

menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    menuContainer.style.display = 'block';
    
    void menuContainer.offsetWidth;
    menuContainer.classList.add('open');
});

closeMenuButton.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', false);
    menuContainer.classList.remove('open');
    menuContainer.style.display = 'none';
});

menuContainer.addEventListener('transitionend', (event) => {
    if (!menuContainer.classList.contains('open')) {
        menuContainer.style.display = 'none';
    }
});
