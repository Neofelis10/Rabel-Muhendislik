document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();

    document.getElementById("year").textContent = currentYear;
});

$(document).ready(function () {
    $(".referans-carousel").owlCarousel();
});

$('.referans-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});





