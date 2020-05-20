// ==UserScript==
// @name         Thingiverse remove annoying users' comments
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.1
// @description  Filter out group messages from users that post stuff you don't care about.
// @author       Dr. Lex
// @include      https://www.thingiverse.com/groups/*
// @grant        none
// ==/UserScript==

// Edit to your likings. You must prepend each name with '/' because I have been spending too much time on this script already to make it more user-friendly.
var filterUsers = ["/CpCaveman"];

function hack() {
    'use strict';
    var dashboardLinks = document.getElementsByClassName('comment-body content-box full-width');
    for(var i = 0; i < dashboardLinks.length; i++) {
        if(dashboardLinks[i].firstElementChild.className == "comment-header") {
            var userLink = dashboardLinks[i].firstElementChild.firstElementChild;
            if(userLink.nodeName == "A" && filterUsers.indexOf(userLink.getAttribute("href")) > -1) {
                var userName = userLink.getAttribute("href").substr(1);
                dashboardLinks[i].innerHTML = "<EM>You don't want to read this comment by " + userName + "</EM>";
            }
        }
    }
};

window.setTimeout(hack, 500);
