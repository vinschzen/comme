function disableButtons(clickedButton, catalogue) {
    var parentElement = clickedButton.parentElement;
    var buttons = parentElement.getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }

    var elementToToggle = document.getElementById(catalogue);

    var couture =  document.getElementById('couture-catalogue');
    var edgy =  document.getElementById('edgy-catalogue');
    var classic =  document.getElementById('classic-catalogue');

    couture.style.display = 'none';
    edgy.style.display = 'none';
    classic.style.display = 'none';

    elementToToggle.style.display = 'block';
    


    clickedButton.disabled = true;
}