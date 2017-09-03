/*global $, alert, console*/
$(function () {
    "use strict";
 //trigger nicescroll
    $("html").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: 10,
        border: "#f7600e"
    });
    
    //header height
    $(".header").height($(window).height());
    
    //intro height
    $(".intro").css("padding-top", ($(window).height() - $(".intro").height()) / 2);
    
    //arrow
    $(".arrow").click(function () {
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });
    
    //images hover
   
   
    //show more
    $(".gallery .button0").click(function () {
        $(".gallery .row0").fadeToggle();
    });
    //check testimonials
    function checkClients() {
        if ($(".testim .client:last").hasClass("active")) {
            $("i.fa-chevron-right").fadeOut();
        } else {$("i.fa-chevron-right").fadeIn();
               }
        
        if ($(".testim .client:first").hasClass("active")) {
            $("i.fa-chevron-left").fadeOut();
        } else {$("i.fa-chevron-left").fadeIn();
               }
    }
    checkClients();
    $(".testim i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".testim .active").addClass("hidden").removeClass("active").next(".client").addClass("active").removeClass("hidden");
        } else {$(".testim .active").addClass("hidden").removeClass("active").prev(".client").addClass("active").removeClass("hidden");
            
            }
        checkClients();
    });
    
    
});


