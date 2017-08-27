import $ from "jquery";

export default class ImageBackgroundConverter {
    constructor(selector) {
        this.image = $(selector);
    }

    init() {
        this.image.each(function(index) {
            const img = $(this)
            const src = img.attr("src")
            const parent = img.parent()
            parent.css("background", 'url(' + src + ') center center no-repeat');
            parent.css("background-size", 'cover');
            parent.css("min-height", "250px");
            img.hide();
            console.log(src, parent.css("background"), 'url(' + src + ') center center no-repeat');
        });
    }
}