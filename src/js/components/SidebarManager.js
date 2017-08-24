const $ = require("jquery");

export default class SidebarManager {

    constructor(sidebarElement, toggleButton) {
        this.sidebar = $(sidebarElement);
        this.toggleButton = $(toggleButton);
        console.log(this.sidebar, this.toggleButton);
    }

    init() {
        this.toggleButton.on("click", () => { this.toggle(); });
    }

    toggle() {
        console.log("toggle", this, this.sidebar);
        this.sidebar.toggleClass("opened");
        this.toggleButton.toggleClass("opened");
    }
}