// ==UserScript==
// @name         Thingiverse fix 'full screen' gallery title
// @namespace    https://github.com/DrLex0/ThingiverseIssues
// @version      0.2
// @description  Workaround for issue #11
// @author       Dr. Lex
// @include      https://www.thingiverse.com/thing:*
// @include      https://www.thingiverse.com/make:*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var thingGalleryTitle = document.querySelector('.item-page-header .item-page-info h1');
    if(thingGalleryTitle) {
        thingGalleryTitle.style.whiteSpace = 'nowrap';
        thingGalleryTitle.style.textOverflow = 'ellipsis';
    }
    else {
        console.log("Cannot hack thing gallery title: element not found");
   }
})();
