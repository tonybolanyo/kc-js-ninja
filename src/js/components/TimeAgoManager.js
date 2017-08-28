import $ from 'jquery';
import moment from 'moment';

export default class TimeAgoManager {
    constructor(selector) {
        console.log("Time ago manager constructor")
        this.element = $(selector);
        // configure moment threshold
        moment.relativeTimeThreshold('ss', 0);
        moment.relativeTimeThreshold('s', 59);
        moment.relativeTimeThreshold('m', 59);
        moment.relativeTimeThreshold('h', 24);
        moment.relativeTimeThreshold('d', 30);
        moment.relativeTimeThreshold('M', 12);
    }

    init() {
        console.log("Time ago manager init")
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