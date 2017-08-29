import $ from 'jquery';
import moment from 'moment';

export default class TimeAgoManager {
    constructor(selector) {
        this.element = $(selector);
        // configure moment threshold
        moment.relativeTimeThreshold('s', 60);
        moment.relativeTimeThreshold('ss', 1);
        moment.relativeTimeThreshold('m', 60);
        moment.relativeTimeThreshold('h', 24);
        moment.relativeTimeThreshold('d', 30);
        moment.relativeTimeThreshold('M', 12);
    }

    init() {
        this.element.each((index) => {
            const dateElement = $(this.element[index]);
            const dateValue = moment(dateElement.data("pub-date"));
            dateElement.html(this.getFormattedDate(dateValue));
        });
    }
    
    getFormattedDate(date) {
        const now = moment();
        let stringDate;
        if (now.subtract(1, 'day') < date) {
            stringDate = date.fromNow()
        } else if (now.subtract(1, 'week') < date) {
            stringDate = date.format("dddd")
        } else {
            stringDate = date.format("YYYY-MM-DD HH:mm")
        }
        return stringDate;
    }
}