import $ from 'jquery';
import moment from 'moment';

export default class CommentsService {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    listArticleComments(articleId, successCallback, errorCallback) {
        $.ajax({
            url: `${this.endpoint}?article_id=${articleId}`,
            success: successCallback,
            error: errorCallback
        });
    }

    save(comment, successCallback, errorCallback) {
        let method = "post";
        comment.datetime = moment().format("YYYY-MM-DD HH:mm:ss");
        if (comment.id) {
            method = "put"
        }
        $.ajax({
            method: method,
            url: this.endpoint,
            data: comment,
            success: successCallback,
            error: errorCallback
        });
    }

    getCommentsCount(articleId, successCallback, errorCallback) {
        $.ajax({
            method: "get",
            url: `${this.endpoint}?article_id=${articleId}&_start=0&_end=1`,
            success: function(data, textStatus, jqXHR) {
                const count = jqXHR.getResponseHeader("x-total-count");
                successCallback({ "count": count });
            },
            error: errorCallback
        });
    }

}