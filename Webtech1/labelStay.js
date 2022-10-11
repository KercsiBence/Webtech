$(document).ready(function() {
    var $input = $('.o-input');

    $input.focusout(function() {
        if($(this).val().length > 0) {
            $(this).addClass('input-focus');
            $(this).next('.input-label').addClass('input-focus-label');
        }
        else {
        $(this).removeClass('input-focus');
            $(this).next('.input-label').removeClass('input-focus-label');
            
        }
    });
});