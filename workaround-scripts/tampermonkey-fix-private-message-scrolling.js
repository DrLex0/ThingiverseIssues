// ==UserScript==
// @name         Thingiverse fix lack of scroll in private messages
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.1
// @description  Workaround that re-adds scrolling to private message threads
// @author       Dr. Lex
// @include      https://www.thingiverse.com/messages:*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyle314160") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8627";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

function hack() {
// This is quick and very dirty. Not sure if it will work if there are multiple pages.
GM_addStyle ( `
.message-replies > .message-reply
{
    height: 100%;
}
`);
}

window.setTimeout(hack, 250);
