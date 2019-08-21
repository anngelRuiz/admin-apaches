// https://atomiks.github.io/tippyjs/themes/
tippy('#myButton', {
    content: "I'm in pay!",
    animateFill: false,
    animation: 'scale', // or 'shift-toward', 'fade', ...
});

$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('.profile-name').css("visibility", "hidden");
        $('#content').css("padding-left", "80px");
    }

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if ($(window).width() <= 768) {
            if ($('#sidebar').hasClass('active')) {
                $('.nav-l').css("padding-left", "0");
                $('#sidebar').css("margin-left", "-250px");
                $('#content').css("padding-left", "0");
            }
            else {
                $('.nav-l').css("padding-left", "80px");
                $('#sidebar').css("margin-left", "0");
                $('#content').css("padding-left", "80px");
            }
        } else {
            if ($('#sidebar').hasClass('active')) {
                $('.profile-name').css("visibility", "hidden");
                $('.nav-l').css("padding-left", "80px");
                $('#content').css("padding-left", "80px");
                $('#sidebar').css("width", "80px");

            } else {
                $('.nav-l').css("padding-left", "250px");
                $('#sidebar').css("width", "250px");
                $('.profile-name').css("visibility", "visible");
                $('#content').css("padding-left", "250px");
            }
        }

    });
});

$(window).resize(function () {
    if ($(window).width() <= 992) {
        $('.panel-profile').css("max-width", "100%");
    } else {
        $('.panel-profile').css("max-width", "400px");
    }
    if ($(window).width() <= 578) {
        $('label').removeClass('text-right');
    } else {
        $('label').addClass('text-right');
    }

    if ($(window).width() <= 768) {
        if ($('#sidebar').hasClass('active')) {
            $('#sidebar').css("margin-left", "-250px");
            $('.nav-l').css("padding-left", "0");
            $('#content').css("padding-left", "0");
        }
        else {
            $('#sidebar').css("width", "80px");
            $('#sidebar').css("margin-left", "0");
            $('.nav-l').css("padding-left", "80px");
            $('#content').css("padding-left", "80px");
        }

        $('.profile-name').css("visibility", "hidden");
    } else {
        $('#sidebar').css("margin-left", "0");
        if ($('#sidebar').hasClass('active')) {
            $('#sidebar').css("width", "80px");
            $('.profile-name').css("visibility", "hidden");
            $('.nav-l').css("padding-left", "80px");
            $('#content').css("padding-left", "80px");
        } else {
            $('#sidebar').css("width", "250px");
            $('.nav-l').css("padding-left", "250px");
            $('.profile-name').css("visibility", "visible");
            $('#content').css("padding-left", "250px");
        }
    }
});
// https://keenthemes.com/metronic/preview/demo12/

// https://keenthemes.com/metronic/preview/demo12/custom/apps/contacts/list-datatable.html