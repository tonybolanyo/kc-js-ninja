import $ from "jquery";

// this must be taken from session
// meanwhile, I use constant value to simulate user is logged in
const currentUserId = 3;

export default class LikesManager {
    constructor(selector, likesService) {
        this.element = $(selector);
        this.likesService = likesService;
    }

    init() {
        this.element.on("click", (event) => {
            const obj = $(event.currentTarget);
            this.toggleLike(obj);
            return false;
        });
        this.element.each((index) => {
            const obj = $(this.element[index]);
            const id = obj.data("article-id");
            this.updateLikeIconStatus(obj, id);
            this.updateLikesCounter(obj, id);
        });
    }

    toggleLike(element) {
        const articleId = element.data("article-id");
        this.likesService.toggleArticleLike(articleId, currentUserId, () => {
            this.updateLikesCounter(element, articleId);
            this.updateLikeIconStatus(element, articleId);
        });
    }

    updateLikesCounter(element, articleId) {
        this.likesService.getArticleLikesCount(articleId, (likes) => {
            $(element).find(".article-likes-count").html(likes)
        });
    }

    updateLikeIconStatus(element, articleId) {
        this.likesService.isArticleLiked(articleId, currentUserId, (liked) => {
            const icon = element.find(".icon");
            if (liked) {
                icon.addClass("icon-liked").removeClass("icon-like");
            } else {
                icon.addClass("icon-like").removeClass("icon-liked");
            }
        });
    }
}