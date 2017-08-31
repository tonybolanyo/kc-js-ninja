import $ from 'jquery';

export default class NavbarSearchManager {
    constructor(searchForm, formOpener) {
        this.searchForm = $(searchForm);
        this.formOpener = $(formOpener);
    }

    init() {
        this.formOpener.on("click", () => {
            this.searchForm.toggleClass("expanded");
            this.formOpener.find(".icon").toggleClass("icon-search").toggleClass("icon-close");
            return false;
        });
    }
}