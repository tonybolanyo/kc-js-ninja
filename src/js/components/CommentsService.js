import $ from 'jquery';

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

}