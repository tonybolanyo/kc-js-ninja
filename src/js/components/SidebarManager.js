const $ = require("jquery");

export default class SidebarManager {

    constructor(sidebarElement, toggleButton) {
        this.sidebar = $(sidebarElement);
        this.toggleButton = $(toggleButton);
    }

    init() {
        this.toggleButton.on("click", () => { this.toggle(); });
    }

    toggle() {
        this.sidebar.toggleClass("opened");
        this.toggleButton.toggleClass("opened");
    }
}