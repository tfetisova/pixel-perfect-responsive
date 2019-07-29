$(document).ready(function() {
    $('.page-header__burger-menu').on('click', ()=>{
        $('.page-header__stripes').toggle();
        $('.page-header__cross,.page-header__cross:after').toggle();
        $('.page-header__menu').toggle()


    })
});
