import $ from "jquery";
import PubSub from "pubsub-js";

import CategoryMenuManager from "./components/CategoryMenuManager";
import CommentFormManager from "./components/CommentFormManager";
import CommentsListManager from "./components/CommentsListManager";
import CommentsService from "./components/CommentsService";
import LikesManager from "./components/LikesManager";
import LikesService from "./components/LikesService";
import NavbarSearchManager from "./components/NavbarSearchManager";
import SidebarManager from "./components/SidebarManager";
import SmoothScroll from "./components/SmoothScrool";
import TimeAgoManager from "./components/TimeAgoManager";

// make jquery globally available
window.$ = window.jQuery = $;

const sidebarManager = new SidebarManager(".sidebar", ".sidebar-toggle");
sidebarManager.init();

const backTopManager = new SmoothScroll(".back-top a", 800);
backTopManager.init();

const likesService = new LikesService();
likesService.init();

const likesManager = new LikesManager(".article-like", likesService);
likesManager.init();

const timeAgoManager = new TimeAgoManager(".article-date");
timeAgoManager.init();

const categoryMenuManager = new CategoryMenuManager("#catMenu");
categoryMenuManager.init();

const navbarSearchManager = new NavbarSearchManager("#navbar-search", "#search-opener");
navbarSearchManager.init();

const commentsService = new CommentsService("/api/comments");

const commentDateTimeManager = new TimeAgoManager(".comment-date");
commentDateTimeManager.init();

const commentsListManager = new CommentsListManager(".comments-section", commentsService, PubSub, commentDateTimeManager);
commentsListManager.init();

const commentsFormManager = new CommentFormManager("#commentForm", commentsService, PubSub);
commentsFormManager.init();