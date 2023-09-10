



let layouts = [
    { imgSrc: "images/shop-1.jpg", title: "Shop Fullwidth" },
    { imgSrc: "images/shop-2.jpg", title: "Shop Sidebar" },
    { imgSrc: "images/shop-3.jpg", title: "Shop Sidebar" },
    { imgSrc: "images/shop-4.jpg", title: "Shop List" },
    { imgSrc: "images/shop-5.jpg", title: "Load More Button" },
    { imgSrc: "images/shop-6.jpg", title: "infinity Scroll" },
]

function display() {
    let box = ''
    for (let i = 0; i < layouts.length; i++) {
        box += `
                <div class="col-md-4">
             <div class="layout-item ">
             
                <a href="">
                <img src="${layouts[i].imgSrc}" class="img-fluid shadow rounded" alt="">
                <p class="text-center my-2">${layouts[i].title}</p></a>
             </div>
             </div>
             `
    }

    document.getElementById('layout').innerHTML = box
}

display()

// jq ex
// plugins
// npm
// modules
// deploy



$(document).ready(function(){

//skitter 
$(".skitter-large").skitter({
    interval:500,
    auto_play:false
});


///navbar
let aboutTop = $('#About').offset().top  //600
$(window).scroll(function () {
    if ($(window).scrollTop() > aboutTop) {
        $('nav').addClass('custom-nav fixed-top')
        $('#toUp').css('display', 'flex')
    }
    else {
        $('nav').removeClass('custom-nav fixed-top')
        $('#toUp').css('display', 'none')
    }
})


$('#toUp').click(function () {
    $('html,body').animate({ scrollTop: '0px' }, 500)
})

//smooth scroll

$('nav a').click(function () {
    let href = $(this).attr('href')  //#About
    let sectionTop = $(href).offset().top  //400
    $('html,body').animate({ scrollTop: sectionTop }, 500)
})

$('aside span').eq(0).css('background-color', 'red')
$('aside span').eq(1).css('background-color', 'teal')
$('aside span').eq(2).css('background-color', 'orange')
$('aside span').eq(3).css('background-color', 'pink')

let w = $('.color-box').innerWidth()
$('.fa-gear').click(function () {
    if ($('aside').css('left') == '0px')
        $('aside').animate({ left: `-${w}px` }, 500)
    else
        $('aside').animate({ left: 0 }, 500)
})


//plugin
})

