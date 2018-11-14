//
window.onscroll = scroll;

var constant_content = $("#constant_content");
function scroll() {
    if (window.pageYOffset >= 153) {
        $('#constant').removeClass('invisible');
    } else {
        $('#constant').addClass('invisible');
    }
}
// window.onscroll = scroll();

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll <= 350) {
//         $('#constant').removeClass('invisible');
//
//     } else {
//         $('#constant').addClass('invisible');
//     }
// });



$(".photo").off('mouseover').on('mouseover', function () {
    $('.outer div').text('');
    let text = $(this).find('h2').text();
    $('.outer div').text(text);
    $('.outer').removeClass('invisible');
});

$(".photo").off('mouseleave').on('mouseleave', function () {
    $('.outer div ').text('');
    $('.outer').addClass('invisible');
});



//
// if ($( "#constant" ).hasClass( "sticky" )) {
//     alert('sdsdc');
//     $('.constant_into_header').css('display','block');
//     $('.constant_out_header').css('display','none');
// } else {
//     $('.constant_into_header').css('display','none');
//     $('.constant_out_header').css('display','block');
// }
