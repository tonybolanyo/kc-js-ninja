import $ from "jquery";

import UIStatusManager from "./UIStatusManager";

export default class CommentsCounterManager extends UIStatusManager{

    constructor(selector, commentsService, pubSub) {
        super(selector);
        this.commentsService = commentsService;
        this.pubSub = pubSub;
    }

    init() {
        for (let element of this.element) {
            const articleId = $(element).data("article-id");
            this.commentsService.getCommentsCount(articleId, (data) => {
                this.setCommentsCount(element, data);
            });
        }
        this.pubSub.subscribe("new-comment", (topic, comment) => {
            const elem = $(`.comments-counter[data-article-id=${comment.article_id}]`);
            this.commentsService.getCommentsCount(comment.article_id, (data) => {
                this.setCommentsCount(elem, data);
            });
        });
    }

    setCommentsCount(element, count) {
        $(element).html(`${count.count}`);
    }
}