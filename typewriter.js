class TypeWriter {
    constructor(el, text) {
        this.el = el;
        this.txt = '';
        this.text = text;
        this.write();
    }
    write() {
        var fullTxt = this.text;
        if (this.txt == fullTxt) {
            clearTimeout();
            this.el.children[0].classList.remove("wrap");
            return;
        }
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        var that = this;
        var delta = 200 - Math.random() * 100;
        setTimeout(function () {
            that.write();
        }, delta);
    }
}