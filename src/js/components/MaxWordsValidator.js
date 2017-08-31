import $ from 'jquery';

export default class MaxWordValidator {

    constructor() {
        this.elements = $("*[data-max-words]");
    }

    validate() {
        let errors = [];
        for (let elem of this.elements) {
            const maxWords = $(elem).data("max-words");
            var words = $(elem).val().split(/[\s]+/);
            if (words.length > maxWords) {
                errors.push(elem);
            }
        }
        return errors;
    }
}