import $ from "jquery";

const currentUserId = 3;

export default class LikesManager {
    constructor(selector, likesService) {
        this.element = $(selector);
        this.likesService = likesService;
    }

    init() {
        console.log("Init LikesManager");
        this.element.on("click", (event) => {
            const obj = $(event.currentTarget);
            const articleId = obj.data("article-id");
            const icon = obj.find(".icon");
            icon.toggleClass("icon-liked").toggleClass("icon-like");
            this.likesService.toggleArticleLike(articleId, currentUserId);
            this.updateLikesCounter(obj, articleId);
            return false;
        });
        this.element.each((index) => {
            const obj = $(this.element[index]);
            const id = obj.data("article-id");
            const liked = this.likesService.isArticleLiked(id, currentUserId);
            const icon = obj.find('.icon');
            console.log(icon);
            if (liked) {
                icon.addClass('icon-liked').removeClass('icon-like');
            }
            console.log("id: " + id, "liked: " + liked);
            this.updateLikesCounter(obj, id);
        });
    }

    updateLikesCounter(element, articleId) {
        console.log("Get article likes", articleId)
        const likes = this.likesService.getArticleLikesCount(articleId);
        $(element).find(".article-likes-count").html(likes)
    }
}