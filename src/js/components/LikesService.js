const initial_likes = [{
        articleId: 1,
        likedBy: [3, 6, 23, 45, 624, 34, 12, 56, 78, 88, 93]
    }, {
        articleId: 2,
        likedBy: [1, 3, 5, 7]
    }, {
        articleId: 3,
        likedBy: [1, 3, 5, 7, 23, 45, 624]
    }, {
        articleId: 4,
        likedBy: []
    }, {
        articleId: 5,
        likedBy: []
    }, {
        articleId: 6,
        likedBy: []
    }, {
        articleId: 7,
        likedBy: [3, 5, 7, 465]
    }, {
        articleId: 8,
        likedBy: [3, 5, 6, 23, 45, 624, 34, 12, 56, 78, 88, 93, 87, 22, 53, 65]
    }, {
        articleId: 9,
        likedBy: [3, 7, 6548, 5, 6, 23, 45, 624, 34, 12, 56, 78, 88, 93, 87, 22, 53, 65]
    }, {
        articleId: 10,
        likedBy: [5, 7, 102, 56, 78, 88, 93]
    }];

export default class LikesService {

    constructor() {}

    init() {
        if (localStorage.getItem("likes") === null) {
            // initial data to simulate article likes
            localStorage.setItem("likes", JSON.stringify(initial_likes));
        }
    }

    getArticleLikesCount(articleId, successCallback, errorCallback) {
        const likes = JSON.parse(localStorage.getItem("likes"))
        const article = likes.find(article => article.articleId === articleId);
        const likesCount = article.likedBy.length;
        successCallback(likesCount);
    }

    toggleArticleLike(articleId, userId, successCallback, errorCallback) {
        const likes = JSON.parse(localStorage.getItem("likes"))
        const article = likes.find(article => article.articleId === articleId);
        const liked = article.likedBy.indexOf(userId);
        if (liked >= 0) {
            article.likedBy.splice(liked, 1)
        } else {
            article.likedBy.push(userId);
        }
        localStorage.setItem("likes", JSON.stringify(likes));
        const likesCount = article.likedBy.length;
        successCallback(likesCount);
    }

    isArticleLiked(articleId, userId, successCallback, errorCallback) {
        const likes = JSON.parse(localStorage.getItem("likes"));
        const article = likes.find(article => article.articleId === articleId);
        const result = (article.likedBy.indexOf(userId) >= 0);
        successCallback(result);
    }
}