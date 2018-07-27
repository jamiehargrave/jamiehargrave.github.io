$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('header').addClass('header-smaller');
        $('#account-menu-wrap').addClass('account-menu-scrolled');
    }
    else {
        $('header').removeClass('header-smaller');
        $('#account-menu-wrap').removeClass('account-menu-scrolled');
    }
});

$(document).ready(function () {
    $("#m-button").click(function () {
        $("#m-nav").toggleClass('m-nav-active');
    });
    $(".m-header-search").click(function () {
        $("#m-search").toggleClass('search-active');
    });
    $("#account-menu-control, #account-menu").hover(function () {
        $("#account-menu-wrap").toggle();
        $("#last-li").toggleClass('highlight');
    });
    $('.back-to-top').click(function () {
    $('html,body').animate({scrollTop:0},500);
    });
    
    $('#search-tag').click(function () {
        $('#search-box').toggleClass('search-box-active'); 
        $('#search-tag').toggleClass('search-tag-active'); 
        $('#search-tag').toggleClass('search-tag-anim');
        $('#search-icon').toggleClass('search-icon-close');
    });
});

