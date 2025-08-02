// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'




// window.onload = () => {
//     const swiper = new Swiper('.swiper', {
//         // Optional parameters
//         direction: 'vertical',
//         loop: true,

//         // If we need pagination
//         pagination: {
//             el: '.swiper-pagination',
//         },

//         // Navigation arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },

//         // And if we need scrollbar
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         },
//     });
// };

// for animation scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});


// for hero section
document.querySelectorAll('.header-hero--left').forEach(el => observer.observe(el));


// for service section
document.querySelectorAll('.service').forEach(el => observer.observe(el));

// for solution



document.querySelectorAll('.solution-top').forEach(el => observer.observe(el));


document.querySelectorAll('.swiper-slide--text_para').forEach(el => observer.observe(el));
