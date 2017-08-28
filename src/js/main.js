import $ from "jquery";
// make jquery globally available
window.$ = window.jQuery = $;

import LikesManager from "./components/LikesManager";
import LikesService from "./components/LikesService";
import SidebarManager from "./components/SidebarManager";
import SmoothScroll from "./components/SmoothScrool";
import TimeAgoManager from "./components/TimeAgoManager";

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