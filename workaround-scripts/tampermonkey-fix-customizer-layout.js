// ==UserScript==
// @name         Thingiverse fix cramped Customizer UI
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.1
// @description  Fix this stupid flaw, the fact that this has been broken for months is just baffling.
// @author       Dr. Lex
// @include      https://www.thingiverse.com/apps/customizer/*
// @grant        none
// ==/UserScript==

// NOTE: even with this fix, Customizer tends to be broken a lot of the time, or is horribly slow,
// and even if it works, the preview is very primitive. You're better off following these instructions:
// https://www.dr-lex.be/3d-printing/customizer.html

var triesLeft = 5;

function hack() {
    'use strict';
    triesLeft--;
    var appFrame = document.getElementById('app_frame');
    if(appFrame) {
        // This should already be present. Apparently sometimes it isn't? Force it to try using all available space.
        appFrame.style.height = 'calc(100vh - 230px)';
        // and to ensure the preview fits:
        appFrame.style.minHeight = '642px';
    }
    else {
        console.log("Customizer fix failure: app_frame not found. Tries left: " + triesLeft);
        if(triesLeft > 0) {
            window.setTimeout(hack, 1000);
        }
   }
};


window.setTimeout(hack, 500);
