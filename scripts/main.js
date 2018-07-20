window.onload = function () {
    var elements = document.getElementsByClassName('typewriter');
    for (var i = 0; i < elements.length; i++) {
        var text = elements[i].getAttribute('data-text');
        // var period = elements[i].getAttribute('data-period');
        if (text) {
            new TypeWriter(elements[i], text);
        }
    }
};