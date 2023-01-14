// ==UserScript==
// @name         Thingiverse fix eyesore styles
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.6
// @description  Workaround for stupid tiny pale text and other dumb styles in the new site design
// @author       Dr. Lex
// @match        https://www.thingiverse.com/thing:*
// @match        https://www.thingiverse.com/make:*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyle_TIVfix_01") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyle_TIVfix_01";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

// The horrible class names make it seem as if this is randomly generated junk that can break at any time.
// Use the power of wildcards to combat this risk, because I have seen the class names being changed indeed.
// This is all quick & dirty because I don't want to spend much time on something that can change at any time.

function hack() {
// Get rid of the preposterous tiny pale fonts that are just downright stupid.
GM_addStyle ( `
[class*="_commentBody-"] p,
[class*="_thingDetails-"] p,
[class*="_thingDetails-"] li,
[class*="BlockDetails__listItem-"]
{
    padding: 15x 20px;
    color: #000 !important;
    opacity: 1.0 !important;
    font-size: medium !important;
    line-height: normal !important;
}
`);
GM_addStyle ( `
[class*="BlockDetails__blockTitle-"] {
    color: #000 !important;
    font-weight: bold !important;
    font-size: x-large !important;
}
`);
GM_addStyle ( `
[class*="_contentTitle-"] {
    color: #000 !important;
    font-weight: bold !important;
    font-size: large !important;
}
`);
GM_addStyle ( `
[class*="_commentTextArea-"] {
    font-size: .9em !important;
}
`);

// Undo the stupid forcing of links onto a separate line.
GM_addStyle ( `
    [class*="_description-"] p a {
        display: inline;
        word-break: normal;
    `
);
}

window.setTimeout(hack, 250);
