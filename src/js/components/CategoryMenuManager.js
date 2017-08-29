import $ from 'jquery';

export default class CategoryMenuManager {


    constructor(selector) {
        this.element = $(selector);
        this.listElement = this.element.find(".navbar-list");
    }

    init() {
        // putting with attr allows us to see it in the developer elements inspector
        this.element.attr("data-overflow", this.checkOverflow(this.element, this.listElement))
        console.log("overflow", this.element.data("overflow"));

        // spy scroll
        let last_knows_scroll_position = 0;
        let ticking = false;
        this.element.on("scroll", () => {
            last_knows_scroll_position = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.doSomething(last_knows_scroll_position);
                    ticking = false;
                })
            }
            ticking = true;
        });
    }

    checkOverflow(container, content) {
        const containerLeft = $(container).offset().left;
        const containerRight = Math.floor(containerLeft + $(container).width());
        const contentLeft = $(content).offset().left;
        const contentRight = Math.floor(contentLeft + $(content).width());
        if (containerLeft > contentLeft && containerRight < contentRight) {
            return "both";
        } else if (contentLeft < containerLeft) {
            return "left";
        } else if (contentRight > containerRight) {
            return "right";
        } else {
            return "none";
        }
    }

    doSomething(scroll_position) {
        this.element.attr("data-overflow", this.checkOverflow(this.element, this.listElement));
    }
}