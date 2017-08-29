import $ from 'jquery';

export default class CategoryMenuManager {


    constructor(selector) {
        this.element = $(selector);
        this.listElement = this.element.find(".navbar-list");
        this.leftButton = this.element.siblings(".navbar-indicator.left");
        this.rightButton = this.element.siblings(".navbar-indicator.right");
        this.scrollDistance = 200;
        this.scrollTime = 400;
    }

    init() {
        // putting with attr allows us to see it in the developer elements inspector
        this.element.attr("data-overflow", this.checkOverflow(this.element, this.listElement))
        console.log("overflow", this.element.data("overflow"));

        this.initScrollSpy();

        this.leftButton.on("click", () => {
            if (this.checkOverflow in ["right", "none"]) {
                console.log("no se puede ir más a la izquierda");
            }
            console.log("offset", $(this.element).scrollLeft());
            this.element.animate({
                scrollLeft: $(this.element).scrollLeft() - this.scrollDistance
            }, this.scrollTime);
        });

        this.rightButton.on("click", () => {
            if (this.checkOverflow in ["left", "none"]) {
                console.log("no se puede ir más a la derecha");
            }
            console.log("offset", $(this.element).scrollLeft());
            this.element.animate({
                scrollLeft: $(this.element).scrollLeft() + this.scrollDistance
            }, this.scrollTime);
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

    updateDataOverflow(scroll_position) {
        this.element.attr("data-overflow", this.checkOverflow(this.element, this.listElement));
    }

    initScrollSpy() {
        // spy scroll
        let last_knows_scroll_position = 0;
        let ticking = false;
        this.element.on("scroll", () => {
            last_knows_scroll_position = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateDataOverflow(last_knows_scroll_position);
                    ticking = false;
                })
            }
            ticking = true;
        });
    }
}