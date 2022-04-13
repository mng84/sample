$(document).ready(function() {

    //Show scroll to top button
    $(".scrollToTop").fadeOut(10);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $(".scrollToTop").fadeIn(1000);
        } else {
            $(".scrollToTop").fadeOut(1000);
        }
    });

    //Animate to the top of the page
    $(".scrollToTop").click(function() {
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

    // wow = new WOW({
    //     animateClass: 'animated',
    //     offset: 100,
    //     callback: function (box) {
    //         console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    //     }
    // });
    // wow.init();

});
//end of jquery

const mobileButton = document.querySelector(".c-burger-container")
const navMenu = document.querySelector(".c-main-navigation-container")
mobileButton.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("c-active")
    navMenu.classList.toggle("c-active")
})


// Animations on scroll
let sectionAbout = document.querySelector(".c-section-about-us");
let sectionFaq = document.querySelector(".c-section-faq");
let sectionBlog = document.querySelector(".c-blog-section");
let sectionFooter = document.querySelector("#c-footer");

window.addEventListener("scroll", (e) => {

    if (e.currentTarget.pageYOffset >= sectionAbout.offsetTop / 1.3) {
        sectionAbout.classList.add("animate__animated", "animate__fadeInUp")
    }
    if (e.currentTarget.pageYOffset >= sectionFaq.offsetTop / 1.3) {
        sectionFaq.classList.add("animate__animated", "animate__fadeInUp")
    }
    if (e.currentTarget.pageYOffset >= sectionBlog.offsetTop / 1.3) {
        sectionBlog.classList.add("animate__animated", "animate__fadeInUp")
    }
    if (e.currentTarget.pageYOffset >= sectionFooter.offsetTop / 1.3) {
        sectionFooter.classList.add("animate__animated", "animate__fadeInUp")
    }



})
