//______________________________________________________________Бургер
$(function () {
    $('.hamburger').on('click', function(){
        $('.hamburger').toggleClass('is-active');
        $('#side_block, .page_overlay').toggleClass('open');
        $('body').toggleClass('lock');
    })
    $('.page_overlay').on('click', function(){
        $('.hamburger').removeClass('is-active');
        $('#side_block, .page_overlay').removeClass('open');
        $('body').removeClass('lock');
        $('.forma').addClass('activisi');
        $('.forma2_wrapper').removeClass('open');
    })
    $('.nav_menu-mobile, a').on('click', function(){
        $('.hamburger').removeClass('is-active');
        $('#side_block, .page_overlay').removeClass('open');
        $('body').removeClass('lock');
    })
})


//________________________________________________________________Хедер
const header = $('.header');
const header_wrapper = $('.header_wrapper')
const scrollChange = 800;
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= scrollChange) { 
        header.addClass('header_active');
        header_wrapper.addClass('header_wrapper-padding')
    } else {
        header.removeClass("header_active");
        header_wrapper.removeClass('header_wrapper-padding')
    }
});


    
//_______________________________________________________________Слайдер
$(function () { 
    $('.slick_slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        dotsClass: "dots_slider",
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    dots: false
                }
            }
        ]
    });
    
})

//_______________________________________________________________Новости
const news = new XMLHttpRequest();
news.overrideMimeType('application/json');
news.open('get', 'https://denys1991.github.io/Beetroot_Kovalenko/Simple_Modern/assets/data/news.json');
news.send();
news.onreadystatechange = function () { 
    if (news.readyState === 4) { 
        if (news.status === 200) {
            const resp = JSON.parse(news.response);
            vievCart(resp);
        } 
    }
}
const sectionNews = document.querySelector('.news');

function vievCart(cart) { 
    let html = '<div class="news_tabl">';
    cart.forEach(item => {
        html += `
            <div class="news_list">
                <div class="news_img"><img class="news_img-img lazy" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw==" data-src="${item.img}" alt=""></div>
                <p class="news_title">${item.title}</p>
                <p class="news_text">${item.text}</p>
                <div class="news_autor">
                    <div class="autor_foto"><img src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw==" data-src="${item.foto}" alt="" class="autor_foto-foto lazy"></div>
                    <div class="autor_namedate">
                    <p class="autor_name">${item.name}</p>
                    <p class="news_data">${item.data}</p>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    sectionNews.insertAdjacentHTML('afterbegin', html); 
    $('.news_tabl').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        dotsClass: "dots_slider2",
        prevArrow: '<button class="btn_slider1"><div class="btn_slider-arrow1"></div></button>',
        nextArrow: '<button class="btn_slider2"><div class="btn_slider-arrow2"></div></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1010,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
    lazyLoad()
}


$(function () { 
    $('.map_overlay').on('click', function () { 
        $('#map_wrapper').removeClass('none');
        $('.map_overlay').addClass('none');
        var myIcon = L.icon({
    iconUrl: 'assets/img/marker.svg',
    iconSize: [70, 70]    
});
const map = L.map('map_wrapper').setView([40.678150, -73.937299], 60);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.678134, -73.937349], { icon: myIcon }).addTo(map);
    })
})

$('a.yakor').on('click', function (event) { 
    var $anchor = $(this)
    $('html, body')
        .stop()
        .animate(
            {
                scrollTop: $($anchor.attr('href')).offset().top - -27
            },
            {
                duration: 3000,
                specialEasing: {
                    width: 'linear',
                    height: 'easeInOutCubic'
                },
            }
        )
    event.preventDefault()
}
)

$('button.btn_slider').on('click', function (event) { 
    $('html, body')
    .animate(
        {
            scrollTop: $($(this).on('#projects_wrapper')).offset().top - -195
        },
        {
            duration: 2000,
            specialEasing: {
                width: 'linear',
                height: 'easeInOutCubic'
            },
        }

    )
})

$(function () { 
    $('.forma_button-btn').on('click', function () { 
        $('.forma').toggleClass('activisi');
        $('.page_overlay').toggleClass('open');
        $('.forma2_wrapper').toggleClass('open');
        $('body').toggleClass('lock');
    })
})