import $ from "jquery";
// make jquery globally available
window.$ = window.jQuery = $;

import SidebarManager from "./components/SidebarManager";
import SmoothScroll from "./components/SmoothScrool";

const sidebarManager = new SidebarManager(".sidebar", ".sidebar-toggle");
sidebarManager.init();

const backTopManager = new SmoothScroll(".back-top a", 800);
backTopManager.init();