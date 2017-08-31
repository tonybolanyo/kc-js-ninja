import UIStatusManager from "./UIStatusManager";

export default class CommentsListManager extends UIStatusManager {
    constructor(selector, service, pubSub, dateTimeFormatter) {
        super(selector);
        this.service = service;
        this.articleId = this.element.data("article-id");
        this.pubSub = pubSub;
        this.dateTimeFormatter = dateTimeFormatter;
        this.initLoaded = false;
    }

    init() {
        this.pubSub.subscribe("new-comment", (topic, comment) => {
            this.loadComments(comment.article_id);
        });
        $(window).on("scroll", (e) => {
            this.lazyLoad($(e.currentTarget), this.element);
        });
        $(window).on("resize", (e) => {
            this.lazyLoad($(e.currentTarget), this.element);
        });
    }

    lazyLoad(window, section) {
        const windowBottom = window.scrollTop() + window.height();
        const elementBottom = section.position().top + section.outerHeight();
        if (!this.initLoaded && windowBottom >= elementBottom) {
            this.initLoaded = true;
            if (this.articleId) {
                this.loadComments(this.articleId);
            } else {
                console.log("No article ID");
            }
        }
    }

    loadComments(articleId) {
        this.service.listArticleComments(articleId, comments => {
            if (comments.length == 0) {
                this.setEmpty()
            } else {
                this.renderComments(comments);
                this.dateTimeFormatter.setupElements();
                this.dateTimeFormatter.setFormattedDate();
                this.setLoaded();
            }
        }, error => {
            this.setError();
        });
    }

    renderComments(comments) {
        let html = "";

        for (let comment of comments) {
            html += this.renderComment(comment);
        }
        this.setLoadedHtml(html);
    }

    renderComment(comment) {
        return `
            <div class="comment">
                <div class="comment-avatar">
                    <img src="img/user-profile.svg" alt="">
                </div>
                <div class="comment-content">
                    <div class="comment-meta">
                        <span class="comment-author">${comment.author}</span> ·
                        <span class="comment-date" data-pub-date="${comment.datetime}">${comment.datetime}</span>
                    </div>
                    <div class="comment-text">${comment.comment}</div>
                </div>
            </div>`
    }
}