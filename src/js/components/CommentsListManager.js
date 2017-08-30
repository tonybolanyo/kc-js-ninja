import UIStatusManager from "./UIStatusManager";

export default class CommentsListManager extends UIStatusManager {
    constructor(selector, service) {
        console.log("CommentsListManager.constructor");
        super(selector);
        this.service = service;
        this.articleId = this.element.data("article-id");
    }
    
    init() {
        console.log("CommentsListManager.init");
        if (this.articleId) {
            this.loadComments(this.articleId);
        } else {
            console.log("No article ID");
        }
    }
    
    loadComments(articleId) {
        console.log("CommentsListManager.loadComments");
        console.log("loading comments for article", articleId);
        this.service.listArticleComments(articleId, comments =>{
            if (comments.length == 0) {
                this.setEmpty()
            } else {
                this.renderComments(comments);
                this.setLoaded();
            }
        }, error => {
            this.setError();
        });
    }

    renderComments(comments) {
        console.log("CommentsListManager.renderComments");
        let html = "";

        for (let comment of comments) {
            html += this.renderComment(comment);
        }
        this.setLoadedHtml(html);
    }

    renderComment(comment) {
        console.log("CommentsListManager.renderComment");
        return `
            <div class="comment">
                <div class="comment-avatar">
                    <img src="img/user-profile.svg" alt="">
                </div>
                <div class="comment-content">
                    <div class="comment-meta">
                        <span class="comment-author">${comment.author}</span> ·
                        <span class="comment-date">TODO: date</span>
                    </div>
                    <div class="comment-text">${comment.comment}</div>
                </div>
            </div>`
    }
}