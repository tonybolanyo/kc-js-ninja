import $ from "jquery";
// make jquery globally available
window.$ = window.jQuery = $;

import CategoryMenuManager from "./components/CategoryMenuManager";
import LikesManager from "./components/LikesManager";
import LikesService from "./components/LikesService";
import NavbarSearchManager from "./components/NavbarSearchManager";
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

const categoryMenuManager = new CategoryMenuManager("#catMenu");
categoryMenuManager.init();

const navbarSearchManager = new NavbarSearchManager("#navbar-search", "#search-opener");
navbarSearchManager.init();