$(window).load(function(){
    $('#loading').fadeOut();
});

$('document').ready(function(){
    

    // drop menu
    $('li.dropdown').mouseenter( function () {
        let a =$("li.dropdown a");
        $(a).attr('aria-expanded',"true");
        $(this).addClass('open');
    
        $(this).mouseleave( function () {
            $(a).attr('aria-expanded',"false");
            $(this).removeClass('open');
        });
        
    }); 

    // the auto-type
    var typed = new Typed('#type', {
        strings: ['TO BECOME A FINANCIAL COACH'],
        typeSpeed: 80,
        backSpeed: 0,
        backDelay: 500,
        startDelay: 1000,
        loop: false
    });

    new WOW().init();
    $('.loader-inner').loaders()
});

fade