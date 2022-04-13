$(document).ready(function () {

    //Show scroll to top button
    $(".scrollToTop").fadeOut(10);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".scrollToTop").fadeIn(1000);
        } else {
            $(".scrollToTop").fadeOut(1000);
        }
    });

    //Animate to the top of the page
    $(".scrollToTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    });

    $("#c-homepage-slider").owlCarousel({
        nav: true, // Show next and prev buttons
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        slideSpeed: 800,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
        animateIn: "animate__slideInRight",
        animateOut: "animate__slideOutLeft",
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#c-testimonials-slider").owlCarousel({
        nav: true, // Show next and prev buttons
        // navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        navText: ["<img src='./assets/images/testimonials-left-arrow.svg'>", "<img src='./assets/images/testimonials-right-arrow.svg'>"],
        slideSpeed: 800,
        autoplay: true,
        loop: true,
        autoplayTimeout: 5000,
        animateIn: "animate__slideInRight",
        animateOut: "animate__slideOutLeft",
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var WOW = new WOW;
    WOW.init();

});

//end of jquery


const mobileButton = document.querySelector(".c-burger-container")
const navMenu = document.querySelector(".c-main-navigation-container")
mobileButton.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("c-active")
    navMenu.classList.toggle("c-active")
})


// let tabButtons = document.querySelectorAll(".about-us-tab-title")
// let tabContent = document.querySelectorAll(".c-about-us-timline-title-container")

// tabButtons.forEach((button) => {

//     button.addEventListener("click", () => {

//         let tabTarget = button.dataset.open

//         tabContent.forEach((tab) => {

//             if (tabTarget === tab.id) {
//                 tab.classList.add("is-selected")
//             } else {
//                 tab.classList.remove("is-selected")
//             }

//         })

//     })

// })

// //Accordion

// let allAccordions = document.querySelectorAll(".c-accordion-container");
// allAccordions = Array.from(allAccordions);

// allAccordions.forEach((accordion) => {
//     accordion.addEventListener("click", (e) => {
//         //        let current = document.querySelector(".c-accordion-active")
//         e.currentTarget.classList.toggle("c-accordion-active");
//         //        current.classList.remove("c-accordion-active")
//         //        accordion.classList.toggle("c-accordion-active")
//     });
// });

// //Accordion title add color to title if it is current
// let accordionTitle = document.querySelectorAll(".c-accordion-title-container");
// accordionTitle = Array.from(accordionTitle);


// accordionTitle.forEach((e) => {
//     e.addEventListener("click", (v) => {
//         accordionTitle.forEach((x) => {
//             x.style.color = "#303030";
//             v.currentTarget.style.color = "#929497";
//         })
//     })
// })
