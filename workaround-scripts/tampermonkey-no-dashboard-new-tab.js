// ==UserScript==
// @name         Thingiverse no dashboard opening in new tab
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.2
// @description  1999 called, they want their “target="_blank"” back. Let the user decide whether to open things in a new window.
// @author       Dr. Lex
// @include      https://www.thingiverse.com/*
// @grant        none
// ==/UserScript==

function hack() {
    'use strict';
    var dashboardLinks = document.getElementsByClassName('LinkButton__linkButton--U_cBr PageHeader__dashboardLink--10X_9');
    if(dashboardLinks) {
        dashboardLinks[0].removeAttribute('target');
    }
    else {
        console.log("Cannot hack dashboard link: element not found");
   }
};

// Delay execution because this crap seems to be dynamically loaded and sometimes we're too early.
window.setTimeout(hack, 1000);
