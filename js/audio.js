var buttons = document.querySelectorAll("button");
var a = document.querySelectorAll("a");
var clickSound = document.getElementById("click-sound");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Play the click sound
        clickSound.play();
    });
});

a.forEach(function(a) {
    a.addEventListener("click", function() {
        // Play the click sound
        clickSound.play();
    });
});