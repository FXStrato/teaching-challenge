//jQuery extension, creating a method to handle adding animation class and then removing upon end
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

//On click function for bounce-button
$( "#bounce-button" ).click(function() {
  $(this).animateCss('bounce');
});

//Onclick function for transition button; will fade it out. adding disabled will make it so the button is not clickable anymore
$("#transition-button").click(function() {
  $(this).addClass('animated fadeOut disabled');
})

//Function check for when animation is finished. Makes the paragraph visible, and then gives it a fadeIn animation
$('#transition-button').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  document.querySelector('#vanish-paragraph').style.display = "inline-block";
  $('#vanish-paragraph').animateCss('fadeIn');
});

//Reload button. Simply reloads the page so the animations can play again
$('#reload-button').click(function() {
    location.reload();
});
