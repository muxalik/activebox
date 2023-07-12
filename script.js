$(() => {

    const menuSection = $('#mobile-menu');
    const burgerButton = $('#menu');
    const closeButton = $('#close-button');
    
    const header = $('#header');

    // Fixed header 
    const checkScroll = () => {
        $(window).scrollTop() > $('#intro').innerHeight()
            ? header.addClass('header--fixed')
            : header.removeClass('header--fixed');
    };
    
    checkScroll();

    $(window).on('scroll load resize', function () {
        checkScroll();
    });


    // Smooth scroll
    $('[data-scroll]').on('click', (event) => {
        event.preventDefault();

        let sectionId = event.target.dataset.scroll;
        let sectionOffet = $('#' + sectionId).offset().top;

        menuSection.addClass('nav-mobile--hidden');

        $('html, body').animate({
            scrollTop: sectionOffet - 100,
        }, 700);
    });


    // Burger
    burgerButton.on('click', (event) => {
        menuSection.toggleClass('nav-mobile--hidden');
    });

    closeButton.on('click', (event) => {
        menuSection.toggleClass('nav-mobile--hidden');
    });

    
    // Reviews slider
    let slider = $('#reviews-slider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});