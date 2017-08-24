window.$ = window.jQuery = require('jquery');

import SidebarManager from "./components/SidebarManager";

const sidebarManager = new SidebarManager(".sidebar", ".sidebar-toggle");
sidebarManager.init();