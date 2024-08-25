const toggle = document.querySelector('.toggle');
const navList = document.querySelector('[data-nav-list]');

if (toggle && navList) {
    document.addEventListener('astro:page-load', () => {
        toggle.addEventListener('click', () => {
            toggle.toggleAttribute('aria-expanded', true);
            navList.classList.toggle('expanded');
        });
    });
}