$(document).ready(function (){
    $("#team").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});

let leads = $("leads")
leads.owlCarousel({
    item: 2,
    loop:true,
    center: true,
    margin: 70,
    dots: false,
    nav: false,
    navContainerClass: 'leadsNav'
})
$('.nextBtn').click(function (){
     leads.trigger('next.owl.corousel');
})
$('.prevBtn').click(function (){
    leads.trigger('prev.owl.corousel',[300]);
})