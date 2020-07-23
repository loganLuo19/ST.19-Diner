$(document).ready(function () {
    $('.menuBtn').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('showMenu');
    });
});