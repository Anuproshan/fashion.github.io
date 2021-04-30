// +++++++++++++++++++++++++++++++++++
// +++++++ scroll top function +++++++
// +++++++++++++++++++++++++++++++++++
$(window).ready(function(){
//Change pos/background/padding/add shadow on nav when scroll event happens
$(function(){
var navbar = $('.navbar');

$(window).scroll(function(){
if($(window).scrollTop() <= 40){
navbar.removeClass('navbar-scroll');
$(".navbar .navbar-brand img").attr("src", "assets/image/logo-1.png");
} else {
navbar.addClass('navbar-scroll');
$(".navbar .navbar-brand img").attr("src", "assets/image/logo-2.png");
}
});
});
});