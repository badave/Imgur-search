$(document).ready(function() {
    Gifffer();

    $('.search-button').on('click', function(e) {
       $('form').submit();
    });

    $('.preview-container').on('mouseover', function(e) {
       $(this).find('.additional').css({
           'opacity': 1,
           'transition': 'all 0.2s',
           'transform': 'translate3d(0,0,0)'
       });
    });

    $('.preview-container').on('mouseout', function(e) {
        $(this).find('.additional')
            .css({
                'opacity': 0,
                'transform': 'translate3d(-120%,0,0)'
            });
    });
});