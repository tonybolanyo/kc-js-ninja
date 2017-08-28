export default class LikesService {

    constructor() {
        this.likes = [{
                articleId: 1,
                likedBy: [3]
            },{
                articleId: 2,
                likedBy: [1, 3, 5, 7]
            },{
                articleId: 3,
                likedBy: [1, 3, 5, 7]
            },{
                articleId: 4,
                likedBy: []
            },{
                articleId: 5,
                likedBy: []
            },{
                articleId: 6,
                likedBy: []
            },{
                articleId: 7,
                likedBy: [3, 5, 7, 465]
            },{
                articleId: 8,
                likedBy: [3, 5, 87, 22, 53, 65]
            },{
                articleId: 9,
                likedBy: [3, 7, 6548]
            },{
                articleId: 10,
                likedBy: [5, 7, 102]
            }
        ]
    }

    init() {
        if (localStorage.getItem("likes") === null) {
            // initial data to simulate article likes
            localStorage.setItem("likes", JSON.stringify(this.likes));
        }
    }

    getArticleLikesCount(articleId) {
        const likes = JSON.parse(localStorage.getItem("likes"))
        const article = likes.find(article => article.articleId === articleId);
        return article.likedBy.length;
    }
    
    toggleArticleLike(articleId, userId) {
        const likes = JSON.parse(localStorage.getItem("likes"))
        const article = likes.find(article => article.articleId === articleId);
        const liked = article.likedBy.indexOf(userId);
        if (liked >= 0) {
            article.likedBy.splice(liked, 1)
            console.log("unliked article", article);
        } else {
            article.likedBy.push(userId);
            console.log("liked article", article);
        }
        localStorage.setItem("likes", JSON.stringify(likes));
        return article.likedBy.length;
    }

    isArticleLiked(articleId, userId) {
        const likes = JSON.parse(localStorage.getItem("likes"));
        const article = likes.find(article => article.articleId === articleId);
        return (article.likedBy.indexOf(userId) >= 0);
    }
}