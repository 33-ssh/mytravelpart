$(function () { /* document ready 一個js檔只要執行一次就可以 */


    // 滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    // 至頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('fast', 1);
        } else {
            $('#gotop').stop().fadeOut('fast');
        }
    });


});
