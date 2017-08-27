import $ from "jquery";

export default class SmoothScroll {

        constructor (selector, delay) {
            this.element = $(selector);
            this.delay = delay;
            this.hash = this.element[0].hash;
        }

        init() {
            this.element.on("click", () => {
                if (this.hash != "") {
                    let target = $(this.hash);
                    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                    if (target.length) {
                        $("html, body").animate({
                            scrollTop: target.offset().top
                        }, this.delay);
                    }
                }
            });
        }
}