// ==UserScript==
// @name         Thingiverse fix eyesore styles
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.2
// @description  Workaround for stupid tiny pale text and other dumb styles in the new site design
// @author       Dr. Lex
// @include      https://www.thingiverse.com/thing:*
// @include      https://www.thingiverse.com/make:*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyle314159") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

// The horrible class names make it seem as if this is randomly generated junk that can break at any time.
// This is all quick & dirty because I don't want to spend much time on something that can change at any time.

// Get rid of the preposterous tiny pale fonts that are just downright stupid.
GM_addStyle ( `
.ThingComment__commentBody--2xT45 p,
.ThingPage__description--14TtH p,
.ThingPage__description--14TtH div,
.ThingPage__preHistory--312bi p
{
    padding: 15x 20px;
    color: #000;
    opacity: 1.0;
    font-size: medium;
    line-height: normal;
}
`);
GM_addStyle ( `
.ThingPage__blockTitle--3ZdLu {
    color: #000;
    font-weight: bold;
    font-size: x-large;
}
`);
GM_addStyle ( `
.ThingPage__contentTitle--1sg_6 {
    color: #000;
    font-weight: bold;
    font-size: large;
}
`);
GM_addStyle ( `
.ThingComment__commentTextArea--3Px7K {
    font-size: .9em;
}
`);

// Undo the stupid forcing of links onto a separate line.
GM_addStyle ( `
    .ThingPage__description--14TtH p a {
        display: inline;
        word-break: normal;
    `
);
