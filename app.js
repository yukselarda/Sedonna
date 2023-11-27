$(".bars").click(function () {
    $("#hamburger-icon").toggleClass('open');
})

$(".bars").on("click", function () {
    $(".header_menu").slideToggle(250)
});

window.onscroll = function () { myFunction() };

function myFunction() {
    if ($(window).width() > 976) {
        if (document.documentElement.scrollTop > 170) {
            document.getElementById("navbar_uzun").className = "menu_iki";
        } else {
            document.getElementById("navbar_uzun").className = "";
        }
    }
}

$('.teams_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// $('.teams_slider').slick({
//     dots: true, speed: 300,
//     slidesToShow: 2.5,
//     slidesToScroll: 2.5
// });

// $(".istatistikler").waypoint(function () {
//     var counters = $(".count span");
//     var countersQuantity = counters.length;
//     var counter = [];

//     for (i = 0; i < countersQuantity; i++) {
//         counter[i] = parseInt(counters[i].innerHTML);
//     }

//     var count = function (start, value, id) {
//         var localStart = start;
//         setInterval(function () {
//             if (localStart < value) {
//                 localStart++;
//                 counters[id].innerHTML = localStart;
//             }
//         }, 40);
//     }

//     for (j = 0; j < countersQuantity; j++) {
//         count(0, counter[j], j);
//     }
// }, { offset: "99%" });

// $(".form__field").change(function () {
//     console.log("gyuuyg")
//     if ($(this).val().length === 0) {
//         console.log("Boşum")
//         $(document).ready(function () {
//             $(".form__label").removeClass("up");
//         });
//     }
//     else {
//         console.log("alan dolu")
//         $(document).ready(function () {
//             $(".form__label").addClass("up");
//         });
//     }
// });

$(".form__field").on("input", function () {
    setTimeout(() => {
        if ($(this).val().length === 0) {
            console.log("Boşum")
            $(this).closest("div").find(".form__label").removeClass("up");
        }
        else {
            console.log("alan dolu")
            $(this).closest("div").find(".form__label").addClass("up");
            // $(".form__label").ready(function () {
            //     $(this).addClass("up");
            // });
        }
    }, 10);
})