window.$ = window.jQuery = require('jquery');

import SidebarManager from "./components/SidebarManager";
import SmoothScroll from "./components/SmoothScrool";

const sidebarManager = new SidebarManager(".sidebar", ".sidebar-toggle");
sidebarManager.init();

const backTopManager = new SmoothScroll(".back-top a", 800);
backTopManager.init();