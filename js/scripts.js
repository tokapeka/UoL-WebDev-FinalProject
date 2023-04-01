// Grab elements and display error if element is missing
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element){
        return element
    }
    throw new Error(`ensure that ${selector} exists or is typed correctly`)
}

//Navigation bar to move down on scrolling down or up
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated')
    } else {
        headerElement.classList.remove('activated')
    }
}
window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};
menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon-btn');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');
formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-btn');
const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
    bodyElement.classList.add('light-theme');
}
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');
    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});

// Swiper for the carousel
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    // space between slides
    spaceBetween: 20,
    // slide buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // pagination
    pagination: {
        el: '.swiper-pagination'
    },
    //responsive breakpoints for showing slides
    breakpoints: {
        // 700px and up shows 2 slides
        700: {
          slidesPerView: 2
        },
        // 1200px and up shows 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});
