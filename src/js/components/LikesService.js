export default class LikesService {

    constructor() {
        this.likes = [{
                articleId: 1,
                likes: 231,
                likedBy: [3]
            },{
                articleId: 2,
                likes: 232,
                likedBy: [1, 3, 5, 7]
            },{
                articleId: 3,
                likes: 233,
                likedBy: [1, 3, 5, 7]
            },{
                articleId: 4,
                likes: 234,
                likedBy: []
            },{
                articleId: 5,
                likes: 235,
                likedBy: []
            },{
                articleId: 6,
                likes: 236,
                likedBy: []
            },{
                articleId: 7,
                likes: 237,
                likedBy: [3, 5, 7, 465]
            },{
                articleId: 8,
                likes: 238,
                likedBy: [3, 5, 87, 22, 53, 65]
            },{
                articleId: 9,
                likes: 239,
                likedBy: [3, 7, 6548]
            },{
                articleId: 10,
                likes: 230,
                likedBy: [5, 7, 102]
            }
        ]
    }

    getArticleLikesCount(articleId) {
        const article = this.likes.find(article => article.articleId === articleId);
        return article.likes;
    }

    toggleArticleLike(articleId, userId) {
        const article = this.likes.find(article => article.articleId === articleId);
        const liked = article.likedBy.indexOf(userId);
        console.log(userId);
        console.log("liked by (before): ", article.likedBy);
        if (liked >= 0) {
            article.likedBy.splice(userId, 1)
        } else {
            article.likedBy.push(userId);
        }
        console.log("liked by (after): ", article.likedBy);
    }
}