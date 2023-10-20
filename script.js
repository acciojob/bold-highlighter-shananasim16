function highlight() {
    var boldElements = document.querySelectorAll('strong');
    for (var i = 0; i < boldElements.length; i++) {
        boldElements[i].classList.add('bold-highlight');
    }
}

function return_normal() {
    var boldElements = document.querySelectorAll('strong');
    for (var i = 0; i < boldElements.length; i++) {
        boldElements[i].classList.remove('bold-highlight');
    }
}

var highlightLink = document.getElementById('highlight-link');
highlightLink.addEventListener('mouseover', highlight);
highlightLink.addEventListener('mouseout', return_normal);
