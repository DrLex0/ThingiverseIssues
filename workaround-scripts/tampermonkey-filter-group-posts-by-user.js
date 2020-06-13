// ==UserScript==
// @name         Thingiverse remove annoying users' comments
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.3
// @description  Filter out group messages from users that post stuff you don't care about.
// @author       Dr. Lex
// @include      https://www.thingiverse.com/groups/*
// @include      https://www.thingiverse.com/dashboard*
// @grant        none
// ==/UserScript==

// Edit this list to your likings. Mind that this is case-sensitive.
// Any similarity between this example and real usernames is purely coincidental. Ahem.
var filterUsers = ["CpCaveman"];

var filterSlash = [];
filterUsers.forEach(function(x) {
	filterSlash += ["/" + x];
});

function hack() {
    'use strict';
    var dashboardLinks = document.getElementsByClassName('comment-body content-box full-width');
    for(var i = 0; i < dashboardLinks.length; i++) {
        if(dashboardLinks[i].firstElementChild.className == "comment-header") {
            var userLink = dashboardLinks[i].firstElementChild.firstElementChild;
            if(userLink.nodeName == "A" && filterSlash.indexOf(userLink.getAttribute("href")) > -1) {
                var userName = userLink.getAttribute("href").substr(1);
                dashboardLinks[i].innerHTML = "<EM>You don't want to read this comment by " + userName + "</EM>";
            }
        }
    }
};

window.setTimeout(hack, 500);
