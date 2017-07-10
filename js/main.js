function changeToHammock() {
    $("#profileImg").attr('src', 'images/hammock.jpg');
}

function changeToHike() {
    $("#profileImg").attr('src', 'images/hiking.jpg');
}

function changeToNormal() {
    $("#profileImg").attr('src', 'images/profile.jpg');
}
var timeOut;
$('#top').click(function(){
    $("html, body").animate({scrollTop: $(".container").offset().top}, 500);
});