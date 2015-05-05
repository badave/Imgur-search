$(document).ready(function() {
    /* Gifffer is a gif start/stopper */
    Gifffer();

    /* Search on click of submit button */
    $('.search-button').on('click', function(e) {
       $('form').submit();
    });

    /* Show information on mouseover of the current pane */
    $('.preview-container').on('mouseover', function(e) {
       $(this).find('.additional').css({
           'opacity': 1,
           'transition': 'all 0.2s',
           'transform': 'translate3d(0,0,0)'
       });
    });

    /* Hide info on mouseout */
    $('.preview-container').on('mouseout', function(e) {
        $(this).find('.additional')
            .css({
                'opacity': 0,
                'transform': 'translate3d(-120%,0,0)'
            });
    });
});