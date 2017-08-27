import $ from "jquery";

export default class LikesManager {
    constructor(selector, likesService) {
        this.element = $(selector);
        this.likesService = likesService;
    }

    init() {
        console.log("Init LikesManager");
        this.element.on("click", (event) => {
            const articleId = $(event.currentTarget).data("article-id");
            const icon = $(event.currentTarget).find(".icon");
            icon.toggleClass("icon-liked").toggleClass("icon-like");
            this.likesService.toggleArticleLike(articleId, 3);
            return false;
        });
        this.element.each((index) => {
            const obj = $(this.element[index]);
            const id = obj.data("article-id");
            const likes = this.likesService.getArticleLikesCount(id);
            obj.find(".article-likes-count").html(likes);
        });
    }

    getArticleLikes(articleId) {
        console.log("Get article likes")
    }
}