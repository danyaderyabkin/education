

//input plus minus card.html




$('.btn-number').on('click', function (e) {
    e.preventDefault();

    let fieldName = $(this).attr('data-field');
    let type = $(this).attr('data-type');
    let input = $("input[name='" + fieldName + "']");
    let currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {

            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1 + "шт").change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1 + "шт").change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});

$('.input-number').on('change', function () {

    let minValue = parseInt($(this).attr('min'));
    let maxValue = parseInt($(this).attr('max'));
    let valueCurrent = parseInt($(this).val());

    let name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
    } else {
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled');
    } else {
        $(this).val($(this).data('oldValue'));
    }
});

    $(function(){

$(function () {
    function go () {
        $('.pivo1').removeClass('d-none').hide().show(1000, function() {
            $('.pivo2').removeClass('d-none').hide().show(1000, function () {
                $('.pivo3').removeClass('d-none').hide().show(1000, function () {
                    $('.pivo3').delay(1000).hide(1000, function() {
                        $('.pivo2').hide(1000, function () {
                            $('.pivo1').hide(1000);
                        });
                    });
                });
            });
        });
    }
    setInterval (go, 7100);
});

        $('.cards__show').hide();
    
        $('.cards__show-more').each( function () {
            $(this).on('click', function () {
            $('.cards__show').each(function () {
                $(this).slideToggle(500);
            });

            });
        });
    });

//Video index.html

let video = document.querySelector('.bg__video');
let btn = document.querySelector('.video__play');
let bg = document.querySelector('.video__main');
let bgYoutube = document.querySelector('.video__youtube');
let videoFrame = document.querySelector('.video__frame');

btn.addEventListener('click', function () {
    videoFrame.setAttribute('src', 'https://www.youtube.com/embed/0WFE1I-Thf8?autoplay=1');
    bg.classList.add('d-none');
    btn.classList.add('d-none');
    bgYoutube.classList.remove('d-none');
});



