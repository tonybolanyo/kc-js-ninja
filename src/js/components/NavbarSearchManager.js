import $ from 'jquery';

export default class NavbarSearchManager {
    constructor(searchForm, formOpener) {
        this.searchForm = $(searchForm);
        this.formOpener = $(formOpener);
    }

    init() {
        this.formOpener.on("click", () => {
            this.searchForm.toggleClass("expanded");
            return false;
        });
    }
}