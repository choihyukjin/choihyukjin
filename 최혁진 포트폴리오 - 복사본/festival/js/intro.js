$(document).ready(function () {

    var w = ($(window).width() / 2) - ($(".modal").width() / 2);
    var h = ($(window).height() / 2) - ($(".modal").height() / 2);

    $(".modal").css({
        left: w,
        top: h
    });

    if ($(window).width() >= 1024) {

        $(".poster_section>img").click(function () {
            $(".modal").fadeIn("slow");
            $(".modal_bg").fadeIn("slow");
        });

        $(".modal img").click(function () {
            $(".modal").fadeOut("slow");
            $(".modal_bg").fadeOut("slow");
        })

        $(".modal_bg").click(function () {
            $(".modal").fadeOut("slow");
            $(".modal_bg").fadeOut("slow");
        })

    } else {
        $(".poster_section>img").click(function () {
            $(".modal").fadeout("slow");
            $(".modal_bg").fadeout("slow");
        });

    }
});

window.onresize = function () {
    document.location.reload();
};

